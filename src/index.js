const express = require("express");
const routers = require("./routers/");
const db = require("./config/");
const methodOverride = require('method-override');
var bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const hpp = require('hpp');
const path = require("path");
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');
const app = express();

// const morgan = require("morgan")
const cors = require('cors')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require("dotenv").config();
// app.use(express.morgan)
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
  origin:"*"
}))
routers(app);

db.connect();

const hbs = require("express-handlebars");

app.engine(
  "hbs",
  hbs.engine({
    defaultLayout: "main",
    // defaultLayout: "customer",
    extname:".hbs"
  })
);

// sử dụng được engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);
// Serving static files
app.use(express.static(`${__dirname}/public`));
// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  // console.log(req.cookies);
  next();
}); 

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: http://127.0.0.1:${process.env.PORT}`);
  console.log(`server is running on port: http://127.0.0.1:${process.env.PORT}/products`);
});

const express = require("express");
const routers = require("./routers/indexRouter");
const db = require("./config/");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const hbs = require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "*" }));

routers(app);
require("dotenv").config();
db.connect();

app.engine("hbs", hbs.engine({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.listen(process.env.PORT, () => {
  console.log(
    `server is running on port: http://127.0.0.1:${process.env.PORT}`
  );
  console.log(
    `server is running on port: http://127.0.0.1:${process.env.PORT}/orders`
  );
  console.log(
    `server is running on port: http://127.0.0.1:${process.env.PORT}/products`
  );

  console.log(
    `server is running on port: http://127.0.0.1:${process.env.PORT}/dashboard`
  );
  console.log(
    `server is running on port: http://127.0.0.1:${process.env.PORT}/customers`
  );
});

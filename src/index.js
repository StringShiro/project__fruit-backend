const express = require("express");
const app = express();
const routers = require("./routers/");
const db = require("./config/");
const path = require("path");
// const morgan = require("morgan")
const cors = require('cors')


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

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: http://127.0.0.1:${process.env.PORT}`);
  console.log(`server is running on port: http://127.0.0.1:${process.env.PORT}/products`);
});

const express = require("express");
const app = express();
const routers = require("./routers/");
const db = require("./config/");
const path = require("path");

app.use(express.static(__dirname + "../public"));

routers(app);

db.connect();

const handlebars = require("express-handlebars");

app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
  })
);

// sử dụng được engine
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
  console.log("server is running on port: http://127.0.0.1:3000/products");
});

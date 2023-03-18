const productRouter = require("./products");
const siteRouter = require("./site");
function routers(app) {
  app.use("/products", productRouter);

  app.use("/", siteRouter);
}
module.exports = routers;

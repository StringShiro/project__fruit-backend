const productRouter = require("./products");
const siteRouter = require("./site");
const customerRouter = require('./customer')
const dashboardRouter = require('./dashboard')
const orderRouter = require('./order')
const apiRouter = require ('./api')
const userRouter = require('./userRoutes')
function routers(app) {
  app.use("/users", userRouter);
  app.use("/products", productRouter);
  app.use("/dashboard", dashboardRouter);
  app.use("/orders", orderRouter);
  app.use("/customers", customerRouter)
  app.use("/api", apiRouter);
  app.use("/", siteRouter);
}
module.exports = routers;

const productRouter = require("./productsRouter");
const homeRouter = require("./homeRouter");
const customerRouter = require('./customerRouter')
const dashboardRouter = require('./dashboardRouter')
const orderRouter = require('./orderRouter')
const apiRouter = require ('./apiRouter')
const userRouter = require('./userRoutes')


function routers(app) {
  app.use("/users", userRouter);
  app.use("/products", productRouter);
  app.use("/dashboard", dashboardRouter);
  app.use("/orders", orderRouter);
  app.use("/customers", customerRouter)
  app.use("/api", apiRouter);
  app.use("/", homeRouter);
}
module.exports = routers;

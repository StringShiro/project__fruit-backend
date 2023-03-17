const newProducts = require("./products");

function routers(app) {
  // app.get('/product', (req,res)=>{
  //     res.send('product')
  // })
  app.use("/products", newProducts);

  app.get("/", (req, res) => {
    res.render("home");
  });
}
module.exports = routers;

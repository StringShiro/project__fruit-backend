import axios from "axios";

function getProduct(products) {
  
  axios({
    method: "GET",
    url: "http://127.0.0.1:3002/products/api/product/",
    data: null,
  })
    .then((res) => {
      products = res.data;
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
export default getProduct;

import axios from "axios";
import React from "react";
import "./Home_Carousel.scss";

export default class HomeProduct extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:3002/products/api/product/",
      // data: null,
    })
      .then((res) => {
        const products = res.data;
        this.setState({
          products,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const redirect = (id) => {
      window.location = `/Product_details/${id}`;
    };
    const showID = (e) => {
      const productData = [];
      const cardMain = e.target.parentElement;
      const parentDivImage =
        cardMain.querySelector("#productImage").parentElement.parentElement;
      const productName = parentDivImage.querySelector("#productName");
      const productCurrency = parentDivImage.querySelector("#productCurrency");
      const productImage = parentDivImage.querySelector(
        ".card-image #productImage"
      );
      const id = parentDivImage.getAttribute("data-id");
      const productN = productName.textContent;
      const productC = productCurrency.textContent;
      const productI = productImage.src;
      productData.push({
        id: id,
        productName: productN,
        productCurrency: productC,
        productImage: productI,
      });

      const product = JSON.stringify(productData);
      const localstorage = localStorage.setItem("productData", product);
      // console.log(product);
      redirect(id);
    };
    return (
      <>
        {this.state.products.map((product) => (
          <div
            className="HomeCarousel_form"
            key={product._id}
            data-id={product._id}
            id="cardMain"
            onClick={showID}
          >
            <label htmlFor="productImage" className="card-image">
              <img src={product.image} id="productImage" alt="..." />
            </label>
            <div className="heading" id="productName">
              {product.productname}
            </div>
            <div className="category" id="productCurrency">
              {product.currency}{" "}
            </div>
          </div>
        ))}
      </>
    );
  }
}
// HomeCarousel_form

import axios from "axios";
import React from "react";
import "./Product.scss";
export default class RenderProduct extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:3002/products/api/product/",
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
    const productData = [];
    const showID = async (e) => {
      const cardMain = e.target.parentElement;
      const parentDivImage =
        cardMain.querySelector("#productImage").parentElement.parentElement;
      const productName = parentDivImage.querySelector("#productName");
      const productCurrency = parentDivImage.querySelector("#productCurrency");
      const productImage = parentDivImage.querySelector(
        ".card-image #productImage"
      );
      const id = parentDivImage.getAttribute("data-id")
      const productN = productName.textContent;
      const productC = productCurrency.textContent;
      const productI = productImage.src;
      productData.push({
        id:id,
        productName: productN,
        productCurrency: productC,
        productImage: productI,
      });
      localStorage.setItem("productData", JSON.stringify(productData));
      redirect(id)
    };
    return (
      <div className="containerBox">
        {this.state.products.map((product) => (
          <div
            className="card"
            key={product._id}
            data-id={product._id}
            id="cardMain"
            onClick={showID}
          >
            <label htmlFor="productName" className="card-image">
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
      </div>
    );
  }
}

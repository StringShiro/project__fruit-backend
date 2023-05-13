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
      // console.log(productData);
    };
    const showID = async (event) => {
      const productData = [];
      const target = event.target.parentElement;
      const productname = target.querySelector(".heading");
      const currency = target.querySelector(".category");
      const image = target.querySelector(".card-image img");
      const id = target.getAttribute("data-id");
      productData.push({
        id: id,
        productname: productname.textContent,
        currency: currency.textContent,
        image: image.src,
      });
      localStorage.setItem("productData", JSON.stringify(productData));
      redirect(id);
    };

    return (
      <div className="containerBox">
        {this.state.products.map((product) => (
          <div
            className="card"
            key={product._id}
            data-id={product._id}
            onClick={showID}
          >
            <div className="card-image">
              <img src={product.image} alt="..." />
            </div>
            <div className="heading">{product.productname}</div>
            <div className="category">{product.currency} </div>
          </div>
        ))}
      </div>
    );
  }
}

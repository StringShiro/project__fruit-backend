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
        console.log(res.data);
        this.setState({
          products,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const redirect = (e) => {
      const productData = [];
      const target = e.target.parentElement;
      const id = target.getAttribute("data-id");
      window.location = `/Product_details/${id}`;
      const productname = target.querySelector(".heading");
      const currency = target.querySelector(".category");
      const image = target.querySelector("img");
      productData.push({
        id: id,
        productname: productname.textContent,
        currency: currency.textContent,
        image: image.src,
      });
      localStorage.setItem("productData", JSON.stringify(productData));
    };
    return (
      <>
        {this.state.products.map((product) => (
          <div
            className="HomeCarousel_form"
            key={product._id}
            data-id={product._id}
            onClick={redirect}
          >
            <img src={product.image} alt="" />
            <p className="heading">{product.productname}</p>
            <p className="category">{product.currency}</p>
          </div>
        ))}
      </>
    );
  }
}



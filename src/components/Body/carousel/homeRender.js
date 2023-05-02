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
    const handleOnclick = (e) => {
      console.log(e);
    };
    return (
      <>
        {this.state.products.map((product) => (
          <div className="HomeCarousel_form" key={product._id}>
            <img src={product.image} alt="" />
            <p>{product.productname}</p>
            <p>{product.currency}</p>
          </div>
        ))}
      </>
    );
  }
}

// \\<div key={products.id}>
// <div
//   className="card"
//   // onClick={() =>
//   //   handleOnclick({
//   //     id: data.id,
//   //     // img: data.imgUrl,
//   //     // name: data.name,
//   //     // price: data.price,
//   //   })
//   // }
// >
//   <div className="card-image">
//     <img src={products.image} alt="" />
//   </div>
//   <div className="heading">{products.productname}</div>
//   <div className="category">{products.currency} </div>
// </div>
// </div>

import "./Home_Carousel.scss";
import React, { useState } from "react";
import Stores from "../../../data/stores.json";
export default function HomeCarousel() {
  const [active, setActive] = useState(false);
  const handleOnclick = () => {
    console.log(active);
  };

  function getData() {
    const product = "http://localhost:3002/api/products";
    fetch(product)
      .then((res) => {
        return res.json();
      })
      .then(function(){})
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="Home_Carousel">
        <div className="content">
          <h5 onClick={handleOnclick}>Sản phẩm phổ biến</h5>
          <h5 onClick={handleOnclick}>Sản phẩm khuyến mãi</h5>
          <h5 onClick={handleOnclick}>Sản phẩm mới</h5>
        </div>
        <ul className="list_product">
          {getData((data) => {
            data.map((item) => {
              return `
                  <li >
                    <div className="list_product_img">
                      <img src=${item.image} alt="" />
                    </div>
                    <div className="infor_list_product">
                      <p className="name_product">${item.productname}</p>
                      <p className="price_product">${item.cost}</p>
                      <button
                        type="button"
                        className="add_product  btn btn-danger"
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                  </li>
                `;
            });
          })}
        </ul>
      </div>
    </>
  );
}

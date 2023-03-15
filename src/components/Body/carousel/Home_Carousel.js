import "./Home_Carousel.scss";
import React, { useState } from "react";
import Component_list_product from "./component_list_product/Component_list_product";
export default function HomeCarousel() {
  return (
    <>
      <div className="Home_Carousel">
        <div className="content">
          <h6>Sản phẩm phổ biến</h6>
          <h6>Sản phẩm khuyến mãi</h6>
          <h6>Sản phẩm mới</h6>
        </div>
        <Component_list_product></Component_list_product>
      </div>
    </>
  );
}

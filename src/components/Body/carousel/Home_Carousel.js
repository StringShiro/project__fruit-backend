import "./Home_Carousel.scss";
import React, { useState } from "react";
import Stores from "../../../data/stores.json";
export default function HomeCarousel() {
  const [active, setActive] = useState(false);
  const handleOnclick = () => {
    console.log(active);
  };

  return (
    <>
      <div className="Home_Carousel">
        <div className="content">
          <h5 onClick={handleOnclick}>Sản phẩm phổ biến</h5>
          <h5 onClick={handleOnclick}>Sản phẩm khuyến mãi</h5>
          <h5 onClick={handleOnclick}>Sản phẩm mới</h5>
        </div>
        <div className="list_product">
          <ul>
            {Stores &&
              Stores.map((store) => {
                return (
                  <>
                    <li>
                      <div className="list_product_img">
                        <img alt="" src={store.imgUrl} />
                      </div>
                      <div className="infor_list_product">
                        <p className="name_product">{store.name}</p>
                        <p className="price_product">{store.price}</p>
                      </div>
                    </li>
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

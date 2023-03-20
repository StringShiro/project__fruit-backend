import React from "react";
import Stores from "../../../../data/stores.json";
import "./Component_list_product.scss";
const Component_list_product = () => {
  let handleOnclick = () => {
    alert("hello");
  };
  return (
    <>
      {" "}
      <div className="list_product">
        <ul>
          {Stores &&
            Stores.map((store) => {
              return (
                <>
                  <li onClick={handleOnclick}>
                    <div className="wrap_list_product">
                      <div className="list_product_img">
                        <img alt="" src={store.imgUrl} />
                      </div>
                      <div className="infor_list_product">
                        <p className="name_product">{store.name}</p>
                        <p className="price_product">{store.price}</p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Component_list_product;
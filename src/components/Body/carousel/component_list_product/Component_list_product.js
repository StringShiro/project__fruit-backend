import React from "react";
import Stores from "../../../../data/stores.json";
import { useNavigate } from "react-router-dom";
import "./Component_list_product.scss";
// import Product_details from "../../food/Product_details/Product_details";
const Component_list_product = () => {
  const navigate = useNavigate();
  const handleOnclick = (id) => {
    return navigate(`/Product_details?id=${id}`);
  };

  return (
    <>
      <div className="list_product">
        <ul>
          {Stores.map((store) => {
            return (
              <li key={store.id}>
                <div
                  className="list_product_img"
                  onClick={() => handleOnclick(store.id)}
                >
                  <img alt="" src={store.imgUrl} />
                </div>
                <div className="infor_list_product">
                  <p className="name_product">{store.name}</p>
                  <p className="price_product">{store.price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Component_list_product;

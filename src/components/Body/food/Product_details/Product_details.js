import React, { Fragment } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import { connect } from "react-redux";
import "./Product_details.scss";
import { getdataProduct } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Productdetails = (props) => {
  const getdataProducts = useSelector(getdataProduct);
  console.log("check useSelector", getdataProducts);

  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details">
        {getdataProducts &&
          getdataProducts.map((item) => {
            return (
              <div className="flex" key={item.id}>
                <div className="column-xs-12 column-md-7">
                  <div className="product-gallery">
                    <div className="product-image">
                      <img className="active" src={item.img} alt="" />
                    </div>
                    <ul className="image-list">
                      <li className="image-item">
                        <img src={item.img} alt="" />
                      </li>
                      <li className="image-item">
                        <img src={item.img} alt="" />
                      </li>
                      <li className="image-item">
                        <img src={item.img} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column-xs-12 column-md-5">
                  <h1>{item.name}</h1>
                  <h2>{item.price}</h2>
                  <div className="description">
                    <p>content</p>
                  </div>
                  <button className="add-to-cart">Thêm vào giỏ hàng</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { data: state.users };
};
export default connect(mapStateToProps)(Productdetails);

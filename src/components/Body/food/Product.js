import React, { useState } from "react";
import "./Product.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import Stores from "../../../data/stores.json";
import { PRODUCT } from "../../../data/infor_product";
import { Col, Row } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import GetdataProduct from "../../../redux/action";
import { NavLink, useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnclick = (data) => {
    dispatch(GetdataProduct(data));
    return navigate(`/Product_details?id=${data.id}`);
  };

  return (
    <>
      <Logosearch />
      <Row>
        <Col xl={12}>
          <div className="Product">
            <div className="left_product">
              <div className="determine">
                <span>Danh mục sản phẩm</span>
                <ul>
                  {PRODUCT.map((products) => {
                    return (
                      <li key={products.id}>
                        <span className="child_one">{products.name}</span>
                      </li>
                    );
                  })}
                </ul>
                <span>Lọc theo giá</span>
                <input type="text" className="form-control" />
                <ul className="price">
                  <li>10k-20k</li>
                  <li>10k-20k</li>
                  <li>10k-20k</li>
                  <li>10k-20k</li>
                  <li>10k-20k</li>
                </ul>
              </div>
            </div>
            <div className="right_product">
              {Stores.map((store) => {
                return (
                  <div key={store.id}>
                    <div
                      className="card"
                      onClick={() =>
                        handleOnclick({
                          id: store.id,
                          name: store.name,
                          price: store.price,
                          img: store.imgUrl,
                        })
                      }
                    >
                      <div className="card-image">
                        <img src={store.imgUrl} alt="" />
                      </div>
                      <div className="heading">{store.name}</div>
                      <div className="category">{store.price} </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
      <Homefooter></Homefooter>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    datas: state.users,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   getdataProduct: (data) => dispatch(GetdataProduct(data)),
// });
export default connect(mapStateToProps)(Product);

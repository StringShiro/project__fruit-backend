import React from "react";
import "./Product.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";

import { PRODUCT, STORES_PRODUCT } from "../../../data/infor_product";
import { Col, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getdataproduct } from "../../../redux/cartSlice";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnclick = (data) => {
    dispatch(getdataproduct(data));
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
              {STORES_PRODUCT.map((store) => {
                return (
                  <div key={store.id}>
                    <div
                      className="card"
                      onClick={() =>
                        handleOnclick({
                          id: store.id,
                          img: store.imgUrl,
                          name: store.name,
                          price: store.price,
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

export default Product;

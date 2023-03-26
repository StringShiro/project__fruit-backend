import React, { Fragment } from "react";
import "./Product.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import Stores from "../../../data/stores.json";
import { PRODUCT } from "../../../data/infor_product";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function Product(props) {
  const navigate = useNavigate();
  const handleOnclick = (id) => {
    return navigate(`/Product_details?id=${id}`);
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
              </div>
            </div>
            <div className="right_product">
              {Stores.map((store) => {
                return (
                  <div
                    className="card"
                    key={store.id}
                    onClick={() => handleOnclick(store.id)}
                  >
                    <div className="card-image">
                      <img src={store.imgUrl} alt="" />
                    </div>
                    <div className="heading">{store.name}</div>
                    <div className="category">{store.price} </div>
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
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Product);

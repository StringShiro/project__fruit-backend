import React from "react";
import "./Product.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Catelogy_Support";
import { PRODUCT, STORES_PRODUCT } from "../../../data/infor_product";
import { Col, Row,Image,Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getdataproduct } from "../../../redux/cartSlice";
import { useTranslation } from "react-i18next";
import RenderProduct from './productRender'
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleOnclick = (data) => {
    dispatch(getdataproduct(data));
    return navigate(`/Product_details?id=${data.id}`);
  };
  const handlOnchange = (e) => {
    console.log(e.target.name);
  };
  return (
    <>
    <Logosearch/>
    <Container>
      <Row>
        <Col lg={3}>
          <div className="determine">
            <span>{t("product.product_portfolio")}</span>
            <ul>
              {PRODUCT.map((products) => {
                return (
                  <li key={products.id}>
                    <span className="child_one">{products.name}</span>
                  </li>
                );
              })}
            </ul>
            <span>{t("product.Filter_by_price")}</span>

            <ul className="price">
              <li>10k-20k</li>
              <li>10k-20k</li>
              <li>10k-20k</li>
            </ul>
          </div>
        </Col>
        <Col lg={9}>
           
            <RenderProduct/>
        </Col>
      </Row>
    </Container>
    <Homefooter/>
    </>
  );
};

export default Product;

import "./Logo_search.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../translate/config";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function Logosearch() {
  const { t } = useTranslation();
  //

  const product = useSelector((state) => state.cartSlice.product);
  //

  const [nav, setnav] = useState(false);
  // chuyển đổi ngôn ngữ
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, []);
  const onclicklanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };
  // const onclicklanguage = (e) => {
  //   i18n.changeLanguage(e);
  // };

  const scroll_down = () => {
    if (window.scrollY > 90) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener("scroll", scroll_down);
  return (
    <div className={nav === true ? " logo roll" : "logo "}>
      <Container>
        <Row className="logo_header ">
          <Col lg={2} xs={2}>
            <Link to="/">
              <div className="image">
                <img
                  src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                  alt="logo"
                />
              </div>
            </Link>
          </Col>

          <Col className="Navbar_home">
            <li>
              <Link to="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link to="introduce">{t("navbar.introduce")}</Link>
            </li>
            <li>
              <Link to="product">{t("navbar.product")}</Link>
            </li>
            <li>
              <Link to="contact">{t("navbar.contact")}</Link>
            </li>
          </Col>
          <Col xl={2} className="icon">
            {/* tìm kiếm */}
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
              <ul>
                <li>
                  <input type="text" placeholder="Tìm kiếm...." />
                  <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </li>
              </ul>
            </li>
            {/* chuyển ngôn ngữ */}
            <li>
              <i className="fa-solid fa-language"></i>
              <ul className="lge">
                <li>
                  <span onClick={() => onclicklanguage("vi")}>vi</span>
                </li>
                <li>
                  <span onClick={() => onclicklanguage("en")}>en</span>
                </li>
              </ul>
            </li>
            {/* login */}
            <li className="login">
              <Link className="link" to={"/login"}>
                <i className="fa-solid fa-user"></i>
              </Link>
              <ul>
                <Link className="link" to="/ProfilePage">
                  <li>
                    <span>{t("navbar.account_information")}</span>
                  </li>
                </Link>
                <NavLink to={"/ProfilePage/OrderManagement/"} className="link">
                  <li>
                    <span>{t("navbar.my_order")}</span>
                  </li>
                </NavLink>
                <Link className="link">
                  <li>
                    <span>{t("navbar.logout")}</span>
                  </li>
                </Link>
              </ul>
            </li>
            {/* cart shop */}
            <li>
              <Link className="link" to="/shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <span>{product.length}</span>
            </li>
            <li className="bar">
              <Link className="link" to="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Logosearch;

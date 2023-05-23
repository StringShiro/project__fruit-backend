import "./Logo_search.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../translate/config";
import Axios from "axios";
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

  const scroll_down = () => {
    if (window.scrollY > 90) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  const showNav = (e) => {
    const bar = document.querySelector(".navbar");
    bar.classList.toggle("block");
  };
  const redirect = async () => {
    window.location = "/login";
  };
  const axios = async () => {
    try {
      await Axios.post("http://127.0.0.1:3002/users/api/login")
        .then((res) => {
          console.log(res.data);
          // redirect()
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
 
  const redirectLogin = async () => {
    let localstorage = await localStorage.getItem('dataStored')
    let dataProduct = await JSON.parse(localstorage);
    dataProduct = []
    window.location = `/login`;
  };

  const showIcon = async () => {
    const localstorage = await localStorage.getItem("datastored");
    const dataProduct =  await JSON.parse(localstorage);
    const logoheader = document.getElementById("logoheader");
    logoheader.setAttribute("data-id", dataProduct._id);
    const button = document.getElementById("navbarbutton");
    const navbarIcon = document.getElementById("navbarIcon");
    const imageData = document.querySelector("#imageId img");
    imageData.src = dataProduct.avatar;
    const avatarLogin = document.getElementById("avatarLogin");
    const logoLogin = document.getElementById("logoLogin");
    if (dataProduct._id) {
      button.style.display = "none";
      navbarIcon.style.display = "flex";
      logoLogin.style.display = "none";
    }
    if (dataProduct._id) {
      avatarLogin.style.display = "block";
    }
  };
  showIcon();
  const redirectInformationAccount = async () => {
    const localstorage = await localStorage.getItem("datastored");
    const dataProduct = await JSON.parse(localstorage);
    if(dataProduct._id){
      window.location  = `/ProfilePage/${dataProduct.username}`
    }
    else{
      window.location = `/ProfilePage/404`
    }
  };
  window.addEventListener("scroll", scroll_down);
  return (
    <>
      <div className={nav === true ? " logo roll" : "logo "}>
        <div className="logo_header" id="logoheader">
          <Link to="/" className="logoBrand">
            <div className="image">
              <img
                src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                alt="logo"
              />
            </div>
          </Link>
          <ul className="Navbar_home">
            <li>
              <Link to="/">{t("navbar.home")}</Link>
            </li>
            <li>
              <Link to="/gioithieu">{t("navbar.introduce")}</Link>
            </li>
            <li>
              <Link to="/sanpham">{t("navbar.product")}</Link>
            </li>
            <li>
              <Link to="/lienhe">{t("navbar.contact")}</Link>
            </li>
          </ul>
          <ul className="icon" id="navbarIcon">
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
            <li className="login">
              <Link className="link" id="avatarLogin">
                <div className="" id="imageId">
                  <img src="" alt="..." />
                </div>
              </Link>
              <Link className="link" to={"/login"} id="logoLogin">
                <i className="fa-solid fa-user"></i>
              </Link>
              <ul>
                <Link className="link" onClick={redirectInformationAccount}>
                  <li>
                    <span>Thông tin tài khoản</span>
                  </li>
                </Link>
                <Link className="link">
                  <li>
                    <span>Đơn hàng của tôi</span>
                  </li>
                </Link>
                <Link className="link" onClick={redirectLogin}>
                  <li>
                    <span>Đăng xuất</span>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <Link className="link" to="/shopping">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="number">{product.length}</span>
              </Link>
            </li>
            <li className="bar">
              <Link className="link" to="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
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
            <li onClick={showNav}>
              <i className="fa-solid fa-bars" id="bar"></i>
            </li>

            <nav className="navbar">
              <ul>
                <li>
                  <Link to="/login">{t("navbar.login")}</Link>
                </li>
                <li>
                  <Link to="/lienhe">{t("navbar.contact")}</Link>
                </li>
                <li>
                  <Link to="/sanpham">{t("navbar.product")}</Link>
                </li>
                <li>
                  <Link to="/gioithieu">{t("navbar.introduce")}</Link>
                </li>
                <li>
                  <Link to="/">{t("navbar.home")}</Link>
                </li>
                <li>
                  <ul>
                    <li>
                      <input type="text" placeholder="Tìm kiếm...." />
                      <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </ul>
          <ul id="navbarbutton">
            <li>
              <button onClick={redirectLogin}>Đăng Nhập</button>
            </li>
            <li>
              <button onClick={redirectLogin}>Đăng Kí</button>
            </li>
          </ul>
          {/* <ul className="Navbar_bar">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/gioithieu">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/sanpham">Sản Phẩm</Link>
            </li>
            <li>
              <Link to="/lienhe">Liên hệ</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  );
}
export default Logosearch;

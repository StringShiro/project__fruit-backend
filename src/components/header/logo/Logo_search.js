import "./Logo_search.scss";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Logosearch() {
  const [nav, setnav] = useState(false);
  const scroll_down = () => {
    if (window.scrollY > 90) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", scroll_down);
  return (
    <>
      <div className={nav === true ? " logo roll" : "logo "}>
        <div className="logo_header ">
          <Link to="/">
            <div className="image">
              <img
                src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                alt="logo"
              />
            </div>
          </Link>
          <ul className="Navbar_home">
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
          </ul>

          <ul className="icon">
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
              <Link className="link" to={"/login"}>
                <i className="fa-solid fa-user"></i>
              </Link>
              <ul>
                <Link className="link" to="/ProfilePage">
                  <li>
                    <span>Thông tin tài khoản</span>
                  </li>
                </Link>
                <Link className="link">
                  <li>
                    <span>Đơn hàng của tôi</span>
                  </li>
                </Link>
                <Link className="link">
                  <li>
                    <span>Đăng xuất</span>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <Link className="link" to="/shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              {}
              <span>{}</span>
            </li>
            <li className="bar">
              <Link className="link" to="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>

          <ul className="Navbar_bar">
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
          </ul>
        </div>
      </div>
    </>
  );
}
export default connect()(Logosearch);

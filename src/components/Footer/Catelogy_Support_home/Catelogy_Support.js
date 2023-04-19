// /**
//  * @format
//  * @Catelogy_Supportat
//  */
import React from "react";
import "./Catelogy_Support.scss";
import { Link } from "react-router-dom";
export default function CatelogySupport() {
  return (
    <div className="wrap">
      <ul>
        <h3>Healthy-Roo</h3>
        <div className="Catelogy_Support">
          <ul className="catelogy__list">
            <h6>LIÊN HỆ</h6>
            <li>Địa chỉ 5/11 Hạnh Thông Phường 05, Quận Gò Vấp, TP.HCM</li>
            <li>
              <i className="fa-solid fa-phone"></i>Tổng đài CSKH 090.249.2749
            </li>
            <li>
              <i className="fa-solid fa-earth-americas" />
              Gmail
            </li>
            <li>
              <ul>
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <h6>MENU</h6>

            <li>
              <Link className="Link" to={"/"}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="Link" to={"/gioithieu"}>
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link className="Link" to={"/sanpham"}>
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link className="Link" to={"/lienhe"}>
                Liên hệ
              </Link>
            </li>
          </ul>

          <ul>
            <h6>Tài khoản</h6>
            <li>
              <span>Thông tin tài khoản</span>
            </li>
            <li>
              <span>Thông báo của tôi</span>
            </li>
            <li>
              <span>Quản lý đơn hàng</span>
            </li>
            <li>
              <span>Đánh giá sản phẩm</span>
            </li>
          </ul>
          <ul>
            <h6>Đăng Ký</h6>
            <li>
              <span>Đăng ký để nhận được thông tin mới nhất từ chúng tôi</span>
            </li>
            <div className="form_check">
              <input type="text" name="" id="" placeholder="Email..." />
              <button>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </ul>
        </div>
        <div className="Footer_home">
          <div className="nav_footer">
            <h4>Heathy-Roo © 2023</h4>
            <img
              src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
              alt=""
            />
          </div>
        </div>
      </ul>
    </div>
  );
}

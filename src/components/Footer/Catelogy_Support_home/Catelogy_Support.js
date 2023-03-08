// /**
//  * @format
//  * @Catelogy_Supportat
//  */
import React from "react";
import "./Catelogy_Support.scss";

export default function CatelogySupport() {
  return (
    <div className="Catelogy_Support">
      {/* liên hệ */}
      <ul>
        <h3>Healthy-Roo</h3>
        <div className="icon">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-tiktok"></i>
        </div>
        <h6>LIÊN HỆ</h6>
        <li>Phone: +84937994257</li>
        <li>Email: hevamartshop@gmail.com</li>
        <li>Gửi yêu cầu báo giá nhanh</li>
        <li>Giờ làm việc: 9h sáng đến 18h30 tối</li>
      </ul>
      {/* mua sắm */}
      <ul>
        <h6>MUA SẮM</h6>
        <li>Nội Thất</li>
      </ul>
      {/* hỗ trợ khách hàng */}
      <ul>
        <h6>Hỗ trợ khách hàng 24/7</h6>
        <li>Theo giỏi đơn hàng</li>

        <h6>Tài Khoản</h6>
        <li>Quản lý tài khoản</li>
      </ul>
      {/* chính sách bán hàng */}
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
      {/* giới thiệu */}
    </div>
  );
}

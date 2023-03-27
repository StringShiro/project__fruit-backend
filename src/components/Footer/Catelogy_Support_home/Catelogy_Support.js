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

        <h6>LIÊN HỆ</h6>

        <li>Địa chỉ 5/11 Hạnh Thông Phường 05, Quận Gò Vấp, TP.HCM</li>

        <li>
          {" "}
          <i className="fa-solid fa-phone"></i>Tổng đài CSKH 090.249.2749
        </li>
        <li>
          <i className="fa-solid fa-earth-americas">Gmail</i>
        </li>
      </ul>
      {/* mua sắm */}
      <ul>
        <h6>MENU</h6>
        <li>Giới thiệu</li>
        <li>Sản phẩm</li>
        <li>Liên hệ</li>
      </ul>
      {/* hỗ trợ khách hàng */}

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

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
        <li>Siêu thị online Hevamart.com</li>
        <li>Địa chỉ 5/11 Hạnh Thông Phường 05, Quận Gò Vấp, TP.HCM</li>
        <li>Tổng đài CSKH: 090.249.2749</li>
        <li>Bộ phận nhà máy, xuất khẩu, bán sỉ: 093.799.4257</li>
        <li>Quý khách có nhu cầu hãy liên hệ ngay Hevamart.com </li>
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

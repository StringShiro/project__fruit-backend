import React, { useState } from "react";
import "./Shopping.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import { Row, Col, Container } from "react-bootstrap";
// import Stores from "../../../data/stores.json";
export default function Shopping() {
  // const [shoppingcards, setshoppingcards] = useState(false);
  const show = () => {};
  return (
    <>
      <Logosearch />

      <div className="Container">
        {show ? (
          <>
            <div className="has_card">
              <div className="form_has_card">
                <div className="stick">
                  <button className="btn btn-danger">Chọn tất cả</button>
                  <button className="btn btn-danger">Xóa tất cả</button>
                </div>
                <div className="infor_card">
                  <input type="checkbox" className="form-check-input" />
                  <div className="image">
                    <img
                      src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                      alt=""
                    />
                  </div>
                  <div className="content_card">
                    <h5>{`Tên sản phẩm: tên`}</h5>
                    <p>{`Thông tin: ...`}</p>
                    <p>{`Giá sản phẩm: 200.000Đ`}</p>
                    <div className="quantity">
                      <button className="btn btn-danger">+</button>
                      <input type="text" value={1} />
                      <button className="btn btn-danger">-</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment">
                <h2>Thanh toán</h2>
                <div className="form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ và tên"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                  />
                  <div className="pay_momo">
                    <img
                      src="https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_branding-guide-2-2.png"
                      alt=""
                    />
                  </div>
                  <div className="pay_momo">
                    <img
                      src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd2w2SHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3c10eafdffd111f6ec8ef44d76353152683cf2b2/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--492f60b9aac6e8159e50e72bb289c5feb47a79d4/logo%20VNPAY-02.png"
                      alt=""
                    />
                  </div>
                  <button className="btn btn-success">Thanh toán</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="no_card">
            <div className="form_card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                alt=""
              />
              <p>Giỏ hàng của bạn đang trống</p>
              <button className="btn btn-danger">Mua ngay</button>
            </div>
          </div>
        )}
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

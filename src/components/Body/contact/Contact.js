import React from "react";
import "./Contact.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
export default function Contact() {
  return (
    <>
      <Logosearch />
      <div className="form_contact">
        <div className="map">
          <iframe
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=20 Kì đồng Q3&t=&z=10&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
        <div className="contact">
          <div className="contact_content">
            <img
              src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
              alt=""
            />
            <ul>
              <li>319 C16 Lý thường kiệt, Phường 15, Quận 11, Tp.HCM</li>
              <li>076.922.0162</li>
              <li>demo@gmail.com</li>
            </ul>
          </div>
          <h1>Liên Hệ Với Chúng Tôi</h1>
          <div className="contact_left">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Họ và tên"
              />
            </div>
            <div className="col-12">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="contact_right">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Địa chỉ"
              />
            </div>
          </div>
          <div className="form-floating col-12">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
            <label>Comments</label>
            <button type="button" className="btn">
              Gửi
            </button>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

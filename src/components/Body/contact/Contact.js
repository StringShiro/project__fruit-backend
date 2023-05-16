import React from "react";
import "./Contact.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import { useTranslation } from "react-i18next";
import i18n from "../../../translate/config";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Logosearch />
      <div className="body_form_contact">
        <div className="form_contact">
          <div className="map">
            <iframe
              className="iframe"
              title="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=20KìđồngQ3&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
          <div className="contact">
            <div className="contact_content">
              <img
                src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                alt=""
              />
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  {t("contact.addressShop")}
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>076.922.0162
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>demo@gmail.com
                </li>
              </ul>
            </div>
            <h1> {t("contact.contact_us")}</h1>
            <div className="contact_left">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("contact.username")}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="contact_right">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("contact.phone")}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("contact.addressUser")}
                />
              </div>
            </div>
            <div className="form-floating col-12">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"></textarea>
              <label>Comments</label>
              <button type="button" className="btn">
                {t("contact.submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

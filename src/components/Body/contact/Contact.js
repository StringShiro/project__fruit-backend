import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import i18n from "../../../translate/config";
import { Col, Container, Row } from "react-bootstrap";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <Container className="body_form_contact">
        <Row className="form_contact">
          <Col lg={6} className="map">
            <iframe
              className="iframe"
              title="map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=20KìđồngQ3&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
          </Col>
          <Col lg={6} className="contact">
            <Row className="contact_content">
              <Col>
                <img
                  src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                  alt=""
                />
              </Col>
              <Col lg={9} className="ul">
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
              </Col>
            </Row>
            <h1> {t("contact.contact_us")}</h1>
            <Row className="contact_left">
              <Col xs={12} lg={6}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("contact.username")}
                />
              </Col>
              <Col xs={12} lg={6}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </Col>
            </Row>
            <Row className="contact_right">
              <Col xs={12} lg={6}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("contact.phone")}
                />
              </Col>
              <Col xs={12} lg={6}>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("contact.addressUser")}
                />
              </Col>
              <Col lg={12} className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"></textarea>
                <label>Comments</label>
                <button type="button" className="btn">
                  {t("contact.submit")}
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

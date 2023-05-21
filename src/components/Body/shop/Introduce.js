import React from "react";
import "./Introduce.scss";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
function Introduce() {
  const { t } = useTranslation();
  return (
    <Container className="introduce">
      <Row className="introduce_pane">
        <Col lg={5} className="introduce_background">
          <img
            src="https://media.discordapp.net/attachments/1077147401363673108/1077148205575323658/z4123791318980_5d98cdb9de9e4890a9153cd3442d1f97.jpg?width=598&height=598"
            alt=""
          />
        </Col>
        <Col lg={7} className="introduce_content_head">
          <h1>{t("infor.infor")}</h1>
          <span>{t("infor.greeting")}</span>
          <h1>{t("navbar.product")}</h1>

          <div className="product_introduction">
            <p>{t("infor.product_infor.infor1")}</p>
            <div className="bar"></div>
            <p>{t("infor.product_infor.infor2")}</p>
          </div>
        </Col>
      </Row>
      <Row className="introduce_content_body">
        <Row className="">
          <Col lg={6} xs={12} className="content_pane">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3447/3447661.png"
            />
            <div className="content">
              <h4>{t("infor.customer_care.text")}</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </Col>
          <Col lg={6} className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/628/628586.png"
              />
            </div>
            <div className="content">
              <h4>{t("infor.new_product")}</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/4497/4497546.png"
              />
            </div>
            <div className="content">
              <h4>{t("infor.genuine.text")}</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </Col>
          <Col lg={6} className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/1989/1989125.png"
              />
            </div>
            <div className="content">
              <h4>{t("infor.Diverse_payment")}</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Introduce;

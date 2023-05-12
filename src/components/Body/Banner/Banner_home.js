import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import "./Banner_home.scss";
import React from "react";
import { useTranslation } from "react-i18next";
// const styleHeight = {
//   display: "block",
//   paddingLeft: "100px",
//   paddingRight: "100px",
//   maxWidth: "100%",
// };
export default function Bannerhome() {
  const { t } = useTranslation();
  return (
    <div className="">
      <Carousel fade>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <img
              className="displayImg"
              src="https://ik.imagekit.io/fruitcompany/project__fruit/z4123790999235_0f34a757be1d3d8ff32f18afca4e9e6b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676885022323"
              alt="First slide"
            />
          </Row>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <img
              className="displayImg"
              src="https://ik.imagekit.io/fruitcompany/project__fruit/z4123790999235_0f34a757be1d3d8ff32f18afca4e9e6b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676885022323"
              alt="First slide"
            />
          </Row>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <img
              className="displayImg "
              src="https://ik.imagekit.io/fruitcompany/project__fruit/z4123790999235_0f34a757be1d3d8ff32f18afca4e9e6b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676885022323"
              alt="First slide"
            />
          </Row>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="table_sm">
        <div className="table_Advertisement table_2">
          <img
            src="https://media.discordapp.net/attachments/1077147401363673108/1077148205936025690/z4123791319370_e0a12483b6f1724c8b167e61fdd07736.jpg?width=547&height=598"
            alt=""
          />
        </div>
        <div className="table_Advertisement table_3">
          <img
            src="https://media.discordapp.net/attachments/1077147401363673108/1077148205936025690/z4123791319370_e0a12483b6f1724c8b167e61fdd07736.jpg?width=547&height=598"
            alt=""
          />
        </div>
        <div className="table_Advertisement table_4">
          <img
            src="https://media.discordapp.net/attachments/1077147401363673108/1077148205936025690/z4123791319370_e0a12483b6f1724c8b167e61fdd07736.jpg?width=547&height=598"
            alt=""
          />
        </div>
        <div className="horizontal">
          <span>{t("infor.My_order")}</span>
        </div>
      </div>
    </div>
  );
}

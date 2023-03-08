import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import "./Banner_home.scss";
import React from "react";
// const styleHeight = {
//   display: "block",
//   paddingLeft: "100px",
//   paddingRight: "100px",
//   maxWidth: "100%",
// };
export default function Bannerhome() {
  return (
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
  );
}

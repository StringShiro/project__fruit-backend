import "./Home_Carousel.scss";
import React, { useState, useEffect } from "react";
// import Component_list_product from "./component_list_product/Component_list_product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import { Scrollbar } from "swiper";
import Stores from "../../../data/stores.json";
import { Container, Row, Col } from "react-bootstrap";
export default function HomeCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [fontSize, setFontSize] = useState("");
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const updateFontSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setFontSize("50px");
      } else {
        setFontSize("10px");
      }
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile, updateFontSize);

    return () => {
      window.removeEventListener("resize", updateIsMobile, updateFontSize);
    };
  }, [isMobile, fontSize]);
  const slidesPerView = isMobile ? 2 : 4;
  const autoplay = isMobile ? false : true;
  const swiperParams = {
    slidesPerView,
    autoplay,
  };
  return (
    <>
      <Container className="HomeCarousel">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={4} xs={3} className="crossbar"></Col>
            <Col lg={2} md={4} xs={6} className="text">
              <span>{/* {t("infor.My_order")} */} Sản phẩm phổ biến</span>
            </Col>
            <Col lg={5} md={4} xs={3} className="crossbar"></Col>
          </Row>
        </Container>
        <Row>
          <Swiper
            // slidesPerView={}
            {...swiperParams}
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper">
            {Stores &&
              Stores.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Col className="HomeCarousel_form">
                      <img src={item.imgUrl} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </Col>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Row>
      </Container>
    </>
  );
}

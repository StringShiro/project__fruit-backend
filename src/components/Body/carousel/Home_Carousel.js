import "./Home_Carousel.scss";
import React from "react";
// import Component_list_product from "./component_list_product/Component_list_product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import { Scrollbar } from "swiper";
import Stores from "../../../data/stores.json";

export default function HomeCarousel() {
  return (
    <>
      <div className="HomeCarousel">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {Stores &&
            Stores.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="HomeCarousel_form">
                    <img src={item.imgUrl} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

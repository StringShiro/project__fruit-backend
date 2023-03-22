import "./Home_Carousel.scss";
import React, { useState } from "react";
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
          slidesPerView={3}
          spaceBetween={40}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {Stores &&
            Stores.map((item) => {
              return (
                <>
                  <SwiperSlide>
                    <div className="HomeCarousel_form" key={item.id}>
                      <img src={item.imgUrl} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

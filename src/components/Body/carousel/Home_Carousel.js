import "./Home_Carousel.scss";
import React from "react";
// import Component_list_product from "./component_list_product/Component_list_product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import { Scrollbar } from "swiper";
import Stores from "../../../data/stores.json";
import HomeProduct from "./homeRender";
export default function HomeCarousel() {
  return (
    <>
      <div className="HomeCarousel">
        {/* <Swiper
          slidesPerView={4}
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        > 
          <SwiperSlide> */}
            <HomeProduct/>
          {/* </SwiperSlide>

        </Swiper> */}
      </div>
    </>
  );
}

// import Component_list_product from "./component_list_product/Component_list_product";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbar } from "swiper";
// import Stores from "../../../data/stores.json";
import "./Home_Carousel.scss";
import React, {useState,useEffect}from "react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import HomeProduct from "./homeRender";
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
      <div className="HomeCarousel">
        <HomeProduct />
        
      </div>
    </>
  );
}

import React from "react";
import Bannerhome from "./Banner/Banner_home";
import HomeCarousel from "./carousel/Home_Carousel";
import Product from "../Body/food/Product";
import { useLocation } from "react-router-dom";
const Homebody = () => {
  const location = useLocation();

  return (
    <>
      <Bannerhome />
      <HomeCarousel />
    </>
  );
};
export default Homebody;

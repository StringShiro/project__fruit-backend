// /** @format */
import "./Page_Home.scss";
// import Homeheader from "../header/Home_header";

import React from "react";
import Logosearch from "../header/logo/Logo_search";
import { useLocation, Outlet } from "react-router-dom";
import Bannerhome from "../Body/Banner/Banner_home";
import CatelogySupport from "../Footer/Catelogy_Support";
import HomeCarousel from "../Body/carousel/Home_Carousel";
export default function PageHome() {
  const location = useLocation();
  return (
    <>
      <Logosearch />
      {location.pathname === "/" ? (
        <>
          <Bannerhome />
          <HomeCarousel />
        </>
      ) : (
        ""
      )}
      <Outlet></Outlet>
      <CatelogySupport></CatelogySupport>
    </>
  );
}

// /** @format */
// import Homeheader from "../header/Home_header";
import Homebody from "../Body/Home_body";
import Homefooter from "../Footer/Catelogy_Support";
import React from "react";
import Logosearch from "../header/logo/Logo_search";
import { useLocation } from "react-router-dom";
export default function PageHome() {
  const location = useLocation();
  return (
    <>
      <div className="Page_home">
        <Logosearch />
        <div className="page_body">
          <div className="Body_header">
            {location.pathname === "/" ? (
              <>
                <Homebody />
              </>
            ) : (
              ""
            )}
            {location.pathname === "/sanpham" ? (
              <>
                <Homebody />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="Footer_header">
          <Homefooter />
        </div>
      </div>
    </>
  );
}

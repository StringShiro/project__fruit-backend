// /** @format */
import "./Page_Home.scss";
import Homeheader from "../header/Home_header";
import Homebody from "../Body/Home_body";
import Homefooter from "../Footer/Home_footer";
import React from "react";
export default function PageHome() {
  return (
    <>
      <div className="Page_home">
        <div className="Home_header">
          <Homeheader />
        </div>
        <div className="page_body">
          <div className="Body_header">
            <Homebody />
          </div>
        </div>
        <div className="Footer_header">
          <Homefooter />
        </div>
      </div>
    </>
  );
}

import React from "react";
import err from "../img/404-error.png";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-content-center">
      <img src={err} style={{ width: "200px" }} alt="lỗi" />
    </div>
  );
};

export default NotFound;

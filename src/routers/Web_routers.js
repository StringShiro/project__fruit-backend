import React from "react";
import { Route, Routes } from "react-router-dom";
import Product_details from "../components/Body/food/Product_details/Product_details";
const Web_routers = () => {
  return (
    <Routes>
      <Route path="/Product_detail" element={<Product_details />}></Route>
    </Routes>
  );
};

export default Web_routers;

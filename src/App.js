import "./App.css";
import React from "react";
import PageHome from "./components/pages/Page_Home";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./components/header/profilePage/ProfilePage";
import Shopping from "./components/Body/shopping_cart/Shopping";
import Shop from "./components/Body/shop/Shop";
import Contact from "./components/Body/contact/Contact";
import Food from "./components/Body/food/Food";
import Login from "./routers/Login";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<PageHome />}></Route>
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
          <Route path="/gioithieu" element={<Shop />}></Route>
          <Route path="/sanpham" element={<Food />}></Route>
          <Route path="/lienhe" element={<Contact />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

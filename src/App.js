import "./App.css";
import React from "react";
import PageHome from "./components/pages/Page_Home";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./components/header/profilePage/ProfilePage";
import Shopping from "./components/Body/shopping_cart/Shopping";
import Introduce from "./components/Body/shop/Introduce";
import Contact from "./components/Body/contact/Contact";
import Product from "./components/Body/food/Product";
import Login from "./routers/Login";
import Productdetails from "./components/Body/food/Product_details/Product_details";
import Admin from "./components/admin/Admin";
import EmployeeManager from "./components/admin/EmployeeManager/EmployeeManager";
import AddNewProduct from "./components/admin/AddNewProduct/AddNewProduct";
import UserManagement from "./components/admin/UserManagement/UserManagement";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="/"
            preventScrollReset={true}
            element={<PageHome />}></Route>
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
          <Route path="/gioithieu" element={<Introduce />}></Route>
          <Route path="/sanpham" element={<Product />}></Route>
          <Route path="/lienhe" element={<Contact />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Product_details/:id" element={<Productdetails />}></Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="EmployeeManager" element={<EmployeeManager />} />
            <Route path="AddNewProduct" element={<AddNewProduct />} />
            <Route path="UserManagement" element={<UserManagement />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

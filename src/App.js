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
import Myprofile from "./components/header/profilePage/page-child/Myprofile";
import OrderManagement from "./components/header/profilePage/OrderManagement/OrderManagement";
import Notification from "./components/header/profilePage/Notification/Notification";
import ProducteEvaluation from "./components/header/profilePage/ProducteEvaluation/ProducteEvaluation";
import NotFound from "./routers/NotFound";
import HomeCarousel from "./components/Body/carousel/Home_Carousel";
function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" preventScrollReset={true} element={<PageHome />}>
            <Route path="ProfilePage" element={<ProfilePage />}>
              <Route path="Myprofile" element={<Myprofile />}></Route>
              <Route
                path="OrderManagement"
                element={<OrderManagement />}></Route>
              <Route path="Notification" element={<Notification />}></Route>
              <Route
                path="ProducteEvaluation"
                element={<ProducteEvaluation />}></Route>
            </Route>
            <Route path="introduce" element={<Introduce />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="shopping" element={<Shopping />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="Product_details" element={<Productdetails />}></Route>
            <Route path="HomeCarousel" element={<HomeCarousel />}></Route>
            <Route path="admin" element={<Admin />}>
              <Route path="EmployeeManager" element={<EmployeeManager />} />
              <Route path="AddNewProduct" element={<AddNewProduct />} />
              <Route path="UserManagement" element={<UserManagement />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

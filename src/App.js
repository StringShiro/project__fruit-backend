import "./App.scss";
import React from "react";
import PageHome from "./components/Page_Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/header/profilePage/ProfilePage";
import Shopping from "./components/Body/shopping_cart/Shopping";
import Introduce from "./components/Body/shop/Introduce";
import Contact from "./components/Body/contact/Contact";
import Product from "./components/Body/food/Product";
import Login from "./routers/Login";
import Productdetails from "./components/Body/food/Product_details/Product_details";

import OrderManagement from "./components/header/profilePage/OrderManagement/OrderManagement";
import Notification from "./components/header/profilePage/Notification/Notification";
import ProducteEvaluation from "./components/header/profilePage/ProducteEvaluation/ProducteEvaluation";
import NotFound from "./routers/NotFound";
import HomeCarousel from "./components/Body/carousel/Home_Carousel";
import ProfileUpdate from "./components/header/profilePage/profileupdate";
import Profile404 from "./components/header/profilePage/404";
import ProfilePage from "./components/header/profilePage/ProfilePage";

function App() {
  return (
    <>
      <div className="app">
        <div className="width-page">

          <Routes>
            <Route path="/" preventScrollReset={true} element={<PageHome />}>
              
              {/* <Route path=":username" element={<ProfilePage />}>
                  <Route
                    path="OrderManagement"
                    element={<OrderManagement />}
                  ></Route>
                  <Route path="Notification" element={<Notification />}></Route>
                  <Route
                    path="ProducteEvaluation"
                    element={<ProducteEvaluation />}
                  ></Route>
                </Route> */}
              {/* ProfilePage/:username/OrderManagement */}
            </Route>
            <Route
                path="ProfilePage"
                element={<ProfilePage />}
              >
                
              </Route>
            <Route
              path="/ProfilePage/update"
              element={<ProfileUpdate />}
            ></Route>
            <Route path="/ProfilePage/404" element={<Profile404 />}></Route>
            <Route path="/gioithieu" element={<Introduce />}></Route>
            <Route path="/sanpham" element={<Product />}></Route>
            <Route path="/lienhe" element={<Contact />}></Route>
            <Route path="/shopping" element={<Shopping />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/Product_details/:id"
              element={<Productdetails />}
            ></Route>
           
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        
        </div>
      </div>
    </>
  );
}

export default App;


// import Admin from "./components/admin/Admin";
// import EmployeeManager from "./components/admin/EmployeeManager/EmployeeManager";
// import AddNewProduct from "./components/admin/AddNewProduct/AddNewProduct";
// import UserManagement from "./components/admin/UserManagement/UserManagement";
// import Myprofile from "./components/header/profilePage/page-child/Myprofile";

 {/* <Route path="/admin" element={<Admin />}>
              <Route path="EmployeeManager" element={<EmployeeManager />} />
              <Route path="AddNewProduct" element={<AddNewProduct />} />
              <Route path="UserManagement" element={<UserManagement />} />
            </Route> */}
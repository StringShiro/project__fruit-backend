import React from "react";
import "./Admin.scss";
// import { useNavigate } from "react-router-dom";
// import EmployeeManager from "./EmployeeManager/EmployeeManager";
import { NavLink, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="">
      <section className="navigation">
        <div className="nav-container">
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className="nav-list">
              <li>
                <NavLink to={"EmployeeManager"}>
                  <span>Quản lý nhân viên</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"AddNewProduct"}>
                  <span>Thêm mới sản phẩm</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"UserManagement"}>
                  <span>Quản lý user</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default Admin;

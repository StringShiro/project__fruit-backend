import React from "react";
import "./Admin.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserManagement from "./UserManagement/UserManagement";
const Admin = () => {
  const location = useLocation();
  return (
    <div className="p-3">
      <section className=" ">
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
        <div className="logout">
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </section>

      <div className="col-md-12">
        {location.pathname === "/admin" ? (
          <>
            <UserManagement />
          </>
        ) : (
          ""
        )}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;

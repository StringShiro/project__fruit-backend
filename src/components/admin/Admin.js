import React from "react";
import "./Admin.scss";
import { NavLink, Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="d-flex justify-content-between p-3">
      <section className="navigation col-md-2">
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

      <div className="col-md-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;

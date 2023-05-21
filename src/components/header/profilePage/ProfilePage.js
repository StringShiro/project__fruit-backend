import React from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image } from "react-bootstrap";
import Myprofile from "./page-child/Myprofile";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ProfilePage() {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <>
      <div className="ProfilePage">
        <div className="row_profile">
          <div className="Col_infor">
            <div className="infor">
              <div className="image">
                <Image
                  src="https://media.discordapp.net/attachments/1077147401363673108/1077147615742935070/Logo_web.jpg?width=598&height=598"
                  alt=""
                  fluid
                  rounded
                  width={"50px"}
                  height={"50px"}
                />
              </div>
              <div className="user_name">
                <span>Phước trí huỳnh</span>
              </div>
            </div>
            <ul>
              <li>
                <NavLink to={""}>
                  <i className="fa-solid fa-user"></i>
                  <span> {t("profilePage.my_account")}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"OrderManagement"}>
                  <i className="fa-solid fa-newspaper"></i>
                  <span>{t("profilePage.order_management.text")}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"Notification"}>
                  <i className="fa-solid fa-bell"></i>
                  <span>{t("profilePage.notification.text")}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"ProducteEvaluation"}>
                  <i className="fa-solid fa-star"></i>
                  <span>{t("profilePage.product_evaluation.text")}</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="Col_pageChild">
            {location.pathname === "/ProfilePage" ? (
              <>
                <Myprofile />
              </>
            ) : (
              ""
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

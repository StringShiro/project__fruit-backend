import React from "react";
import "./ProducteEvaluation/ProducteEvaluation.scss";
import Bell from "../../../img/bell.png";
import { useTranslation } from "react-i18next";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Catelogy_Support";
import { Link } from "react-router-dom";
import { formatDate } from "./formatdate";
import Axios from "axios";

export default function Profile() {
  const { t } = useTranslation();
  const redirect = () => {
    window.location = `/ProfilePage/update`;
  };
  const [data, setData] = React.useState("");
  const [date, time] = formatDate(new Date()).split(" ");

  const profileUpdate = async (e) => {
    e.preventDefault();
    const localStorag = await localStorage.getItem("datastored");
    const newData = JSON.parse(localStorag);
    const id = newData._id;
    const url = `http://127.0.0.1:3002/users/api/profile/${id}`;
    const birthday = document.getElementById("birthday");
    const fullname = document.getElementById("fullname");
    const address = document.getElementById("inputAddress");
    const phone = document.getElementById("phone");
    const usernameAuthor = document.getElementById("usernameAuthor");
    const avatar = document.getElementById("avatar");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const dataStorage = {
      username: username.value,
      fullname: fullname.value,
      phone: phone.value,
      email: email.value,
      address: address.value,
      birthday: date,
    };
    const datastring = JSON.stringify(dataStorage);
    await Axios.post(url, dataStorage)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="Col_infor">
        <div className="infor">
          <div className="image"></div>
          <div className="user_name">
            <span id="usernameAuthor"></span>
            <div className="edit_user"></div>
          </div>
        </div>
        <ul>
          <li>
            <Link to={"/ProfilePage/update"}>
              <i className="fa-solid fa-pen"></i>
              <span>Sửa hồ sơ</span>
            </Link>
          </li>
          <li>
            <Link to={`/ProfilePage`}>
              <i className="fa-solid fa-user"></i>
              <span>Tài khoản của tôi</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <i className="fa-solid fa-newspaper"></i>
              <span>Quản lý đơn hàng</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <i className="fa-solid fa-bell"></i>
              <span>Thông Báo</span>
            </Link>
          </li>
          <li>
            <Link to={"ProducteEvaluation"}>
              <i className="fa-solid fa-bell"></i>
              <span>Đánh giá sản phẩm</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
// import { Image } from "react-bootstrap";
import Homefooter from "../../Footer/Catelogy_Support"

import Axios from "axios";
export default function ProfilePage() {
  const [data, setData] = React.useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [birth, setBirthday] = useState("");

  const getUser = async () => {
    const localStorag = await localStorage.getItem("datastored");
    const newData = JSON.parse(localStorag);
    console.log(newData.username);
    const usernameAuthor = document.getElementById("usernameAuthor");
    const birthday = document.getElementById("birthday");
    const fullname = document.getElementById("fullname");
    const inputAddress = document.getElementById("inputAddress");
    const phone = document.getElementById("phone");
    const avatar = document.getElementById("avatar");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const profilepage = document.getElementById("ProfilePage");
    usernameAuthor.textContent = newData.username;
    birthday.value = newData.birth;
    fullname.value = newData.fullname;
    inputAddress.value = newData.address;
    phone.value = newData.phone;
    email.value = newData.email;
    username.value = newData.username;
    avatar.src = newData.avatar;
    profilepage.setAttribute("name", newData._id);
  };

  const profileUpdate = async (e) => {
    e.preventDefault();
    const localStorag = await localStorage.getItem("datastored");
    const newData = JSON.parse(localStorag);
    const id = newData._id;
    const url = `http://127.0.0.1:3002/users/api/profile/${id}`;
    const usernameAuthor = document.getElementById("usernameAuthor");
    const birthday = document.getElementById("birthday");
    const fullname = document.getElementById("fullname");
    const address = document.getElementById("inputAddress");
    const phone = document.getElementById("phone");
    const avatar = document.getElementById("avatar");
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const dataStorage = {
      username: username.value,
      fullname: fullname.value,
      phone: phone.value,
      email: email.value,
      address: address.value,
      birthday: birthday.value,
    };
    const datastring = JSON.stringify(dataStorage);
    // await Axios({
    //   method:"POST",
    //   url:url,
    //   data:dataStorage
    // }).then(res=>{
    //   console.log(res)
    // })
    console.log(datastring);
    await Axios.post(url, dataStorage)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const redirect = ()=>{
    window.location  = `/ProfilePage/update`
  }
  
  window.onload = getUser;
  return (
    <>
      <Logosearch />
      <div className="containerBox">
        <div className="ProfilePage" id="ProfilePage" data-id>
          <div className="row_profile">
            <div className="Col_infor">
              <div className="infor">
                <div className="image"></div>
                <div className="user_name">
                  <span id="usernameAuthor">{data.username}</span>
                  <div className="edit_user"></div>
                </div>
              </div>
              <ul>
                <li onClick={redirect}>
                  <i className="fa-solid fa-pen"></i>
                  <span>Sửa hồ sơ</span>
                </li>
                <li>
                  <i className="fa-solid fa-user"></i>
                  <span>Tài khoản của tôi</span>
                </li>
                <li>
                  <i className="fa-solid fa-newspaper"></i>
                  <span>Quản lý đơn hàng</span>
                </li>
                <li>
                  <i className="fa-solid fa-bell"></i>
                  <span>Thông Báo</span>
                </li>
                <li>
                  <i className="fa-solid fa-bell"></i>
                  <span>Đánh giá sản phẩm</span>
                </li>
              </ul>
            </div>
            <div className="Col_content">
              <div className="form-profile">
                <div className="profile__header">
                  <h4>Hồ sơ của tôi</h4>
                  <p>quản lý thông tin hồ sơ cần xử lý</p>
                </div>
                <form action="" method="post" onSubmit={profileUpdate}>
                  <ul>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Họ và tên"
                        name="fullname"
                        id="fullname"
                        disabled="disabled"
                        value={fullname || ""}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Tên đăng nhập"
                        name="username"
                        disabled="disabled"
                        value={username || ""}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        disabled="disabled"
                        value={email || ""}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Ngày sinh"
                        id="birthday"
                        disabled="disabled"
                        value={birth || ""}
                        onChange={(e) => {
                          setBirthday(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Địa chỉ"
                        disabled="disabled"
                        value={address || ""}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Số điện thoại"
                        id="phone"
                        disabled="disabled"
                        value={phone || ""}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value={"Cập nhật"}
                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div
                        className="image"
                        // onClick={handleImg}
                      >
                        <img id="avatar" src={""} alt="..." />
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Homefooter/>
    </>
  );
}

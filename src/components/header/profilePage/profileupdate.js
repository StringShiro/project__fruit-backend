import React, { useState } from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
// import { Image } from "react-bootstrap";
import Homefooter from "../../Footer/Home_footer";
import Axios from "axios";
import { redirect } from "react-router-dom";
export default function ProfilePage() {
  const [data] = React.useState("");
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
    // const username = document.getElementById("username");
    const profilepage = document.getElementById("ProfilePage");
    usernameAuthor.textContent = newData.username;
    birthday.value = newData.birth;
    fullname.value = newData.fullname;
    inputAddress.value = newData.address;
    phone.value = newData.phone;
    email.value = newData.email;
    // username.value = newData.username;
    const usernameu = newData.username;
    avatar.src = newData.avatar;
    profilepage.setAttribute("name", newData._id);
    redirect(usernameu);
  };

  const profileUpdate = async (e) => {
    e.preventDefault();
    const localStorag = await localStorage.getItem("datastored");
    const newData = JSON.parse(localStorag);
    const id = newData._id;
    const url = `http://127.0.0.1:3002/users/api/profile/${id}`;
    // const usernameAuthor = document.getElementById("usernameAuthor");
    const birthday = document.getElementById("birthday");
    const fullname = document.getElementById("fullname");
    const address = document.getElementById("inputAddress");
    const phone = document.getElementById("phone");
    const avatar = document.getElementById("avatar");
    const email = document.getElementById("email");
    
    // const username = document.getElementById("username");
    console.log(avatar)
    const dataStorage = {
      //   username: username.value,
      fullname: fullname.value,
      phone: phone.value,
      email: email.value,
      address: address.value,
      birthday: birthday.value,
      avatar:avatar.src
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
  const redirect = (usernameu) => {
    const clickProfile = document.getElementById("clickProfile");
    clickProfile.addEventListener("click", () => {
      window.location = `/ProfilePage/${usernameu}`;
    });
  };
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
                </div>
              </div>
              <ul>
                <li id="clickProfile" onClick={redirect}>
                  <i className="fa-solid fa-pen"></i>
                  <span>Hồ Sơ</span>
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
                  <h4>Cập Nhật Hồ Sơ Cá Nhân</h4>
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
                        value={fullname || ""}
                        onChange={(e) => {
                          setFullname(e.target.value);
                        }}
                      />
                    </li>

                    <li>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
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
                        value={"Lưu Thông Tin"}
                      />
                    </li>
                  </ul>
                  <ul>
                    <li className="preview">
                      <div
                        className="image"
                        // onClick={handleImg}
                      >
                        <label htmlFor="avatarupdate">
                          <img
                            id="avatar"
                            src={""}
                            alt="..."
                            
                          />
                        </label>
                      </div>
                      <input
                        type="file"
                        id="avatarupdate"
                        name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                            let file = e.target.files[0];
                            if (!file) return;
                            let img = document.querySelector("#avatar");
                            img.src = URL.createObjectURL(file);
                           
                          }}
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

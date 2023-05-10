import React, { useState } from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image } from "react-bootstrap";
import Homefooter from "../../Footer/Home_footer";
import Axios from "axios";

export default function ProfilePage() {
  const [data, setData] = React.useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addres, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [birth, setBirthday] = useState("");

  const getUser = async () => {
    await Axios.get("http://127.0.0.1:3002/users/api/login")
    .then(res=>{
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  };
  getUser()
  return (
    <>
      
      <Logosearch />
        <div className="containerBox">
        <div className="ProfilePage">
          <div className="row_profile">
            <div className="Col_infor">
              <div className="infor">
                <div className="image"></div>
                <div className="user_name">
                  <span>{data.username}</span>
                  <div className="edit_user">
                    <i className="fa-solid fa-pen"></i>
                    <span>Sửa hồ sơ</span>
                  </div>
                </div>
              </div>
              <ul>
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
                <form>
                  <ul>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Họ và tên"
                        // name="username"
                        onChange={(e)=>{setFullname(e.target.value)
                        }}

                        value={data.fullname || ""}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Tên đăng nhập"
                        name="username"
                        value={data.username || ""}
                        onChange={(e)=>{setUsername(e.target.value)
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={data.email || ""}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Ngày sinh"
                        value={data.birth || ""}
                        onChange={(e)=>{
                          setBirthday(e.target.value)
                        }}

                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Địa chỉ"
                        value={data.address || ""}
                        onChange={(e)=>{
                          setAddress(e.target.value)
                        }}

                      />
                    </li>
                    <li>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Số điện thoại"
                        value={data.phone || ""}
                        onChange={(e)=>{
                          setPhone(e.target.value)
                        }}

                      />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div
                        className="image"
                        // onClick={handleImg}
                      >
                        <img src={data.avatar} alt="..." />
                       
                      
                      </div>
                    </li>
                  </ul>
                </form>
                <div className="col-12">
                  <button type="button" className="btn btn-primary">
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}



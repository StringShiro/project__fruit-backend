import React, { useState } from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image } from "react-bootstrap";
import Homefooter from "../../Footer/Home_footer";

export default function ProfilePage() {
  const [imgae, setImage] = useState(null);
  const [files, setFiles] = useState("no image");
  const handleImg = () => {
    document.querySelector(".input-field").click();
  };
  return (
    <>
      <Logosearch />
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
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Tên đăng nhập"
                    />
                  </li>
                  <li>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </li>
                  <li>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Ngày sinh"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Địa chỉ"
                    />
                  </li>
                  <li>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="image" onClick={handleImg}>
                      {imgae ? (
                        <img src={imgae} />
                      ) : (
                        <i
                          className="fa-solid fa-cloud-arrow-up"
                          style={{ color: "#223d44", fontSize: "50px" }}
                        ></i>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="input-field"
                        hidden
                        onChange={({ target: { files } }) => {
                          files[0] && setFiles(files[0].name);
                          if (files) {
                            setImage(URL.createObjectURL(files[0]));
                          }
                        }}
                      />
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
      <Homefooter></Homefooter>
    </>
  );
}

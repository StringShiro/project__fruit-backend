import React from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image } from "react-bootstrap";
import Homefooter from "../../Footer/Home_footer";

//

export default function ProfilePage() {
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
            <div className="profile__header">
              <h4>Hồ sơ của tôi</h4>
              <p>quản lý thông tin hồ sơ cần xử lý</p>
            </div>

            <div className="d-flex justify-content-space-between align-items-center">
              <form className="row g-3">
                <div className="d-flex align-items-center"></div>
                  <div className="image col-md-6">
                    <img
                      src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="col-md-12">
                      <label className="form-label">Họ và tên</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label">Địa chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div className="col-4">
                  <label className="form-label">Số điện thoại</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-4 ">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

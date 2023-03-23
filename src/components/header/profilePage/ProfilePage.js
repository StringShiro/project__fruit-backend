import React, { useState } from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image, Row, Col, Container } from "react-bootstrap";
import Homefooter from "../../Footer/Home_footer";

//
import { storage } from "../../../data/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
export default function ProfilePage() {
  const [ImgUpload, setImgUpload] = useState(null);

  const handlebtn = () => {
    if (ImgUpload == null) return;
    const imgRef = ref(storage, `images/${ImgUpload.name + v4()}`);
    uploadBytes(imgRef, ImgUpload).then(() => {
      alert("uploaded");
    });
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
              <li>Hồ sơ</li>
              <li>Ngân hàng</li>
              <li>Địa chỉ</li>
              <li>Đổi mật khẩu</li>
              <li>
                <i className="fa-solid fa-newspaper"></i>
                <span>Đơn mua</span>
              </li>
              <li>
                <i className="fa-solid fa-bell"></i>
                <span>Thông Báo</span>
              </li>
            </ul>
          </div>
          <div className="Col_content">
            <div className="profile__header">
              <h4>Hồ sơ của tôi</h4>
              <p>quản lý thông tin hồ sơ cần xử lý</p>
            </div>

            <div className="d-flex justify-content-space-between align-items-center">
              <table>
                <tr>
                  <td>
                    <span>Tên đăng nhập</span>
                  </td>
                  <td>trí</td>
                </tr>
                <tr>
                  <td>
                    <span>Email</span>
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Số điện thoại</span>
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Giới tính</span>
                  </td>
                  <td className="gender">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                    />
                    <span>Nam</span>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                    />
                    <span>nữ</span>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="gender"
                    />
                    <span>khác</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Ngày sinh</span>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="">15</option>
                    </select>
                    <select name="" id="">
                      <option value="">Tháng 7</option>
                    </select>
                    <select name="" id="">
                      <option value="">2002</option>
                    </select>
                  </td>
                </tr>
              </table>
              <div className="profile__header-avatar">
                <div className="profile__header-images">
                  <img
                    src="https://ik.imagekit.io/alejk5lwty/image/73d7c068ddf4bb78a711f72f440b91ed-removebg-preview.png?updatedAt=1678593174049"
                    alt=""
                    className="profile__header-img"
                  />
                </div>
                <input
                  type="file"
                  id="files"
                  className="hidden"
                  onChange={(e) => {
                    setImgUpload(e.target.files[0]);
                  }}
                />
                <label htmlFor="files" className="profile__header-label">
                  Chọn Ảnh
                </label>
                <div className="profile__header-description">
                  <div className="profile__header-spandes">
                    Dung Lượng file tối đa 1 MB Định dạng:JPEG,PNG
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-danger" onClick={handlebtn}>
              gửi
            </button>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

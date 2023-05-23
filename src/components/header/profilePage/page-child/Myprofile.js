import React, { useState } from "react";
import "./Myprofile.scss";
const Myprofile = () => {
  const [imgae, setImage] = useState(null);
  const [files, setFiles] = useState("no image");
  const handleImg = () => {
    document.querySelector(".input-field").click();
    console.log(files);
  };
  return (
    <div className="Col_content">
      <div className="form-profile">
        <div className="profile__header">
          <h4 className="mb-5">Hồ sơ của tôi</h4>
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
                  <img src={imgae} alt="" />
                ) : (
                  <i
                    className="fa-solid fa-cloud-arrow-up"
                    style={{ color: "#223d44", fontSize: "50px" }}></i>
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
  );
};

export default Myprofile;

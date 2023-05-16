import React, { useState } from "react";
import "./UserManagement.scss";

import "react-quill/dist/quill.snow.css";
const UserManagement = () => {
  const [imageData, setImageData] = useState(null);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataImg = reader.result;
      const imageDataUrl = new Blob([dataImg], { type: file.type });
      setImageData(imageDataUrl);
    };
    reader.readAsArrayBuffer(file);
  };
  //
  const [valueData, setValueData] = useState([]);
  const [missingFields, setMissingFields] = useState([]);

  const hdlSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const gender = e.target.gender.value;
    const img = e.target.img.files[0];
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    let allFieldsFilled = true;
    const missingFields = [];

    if (!username) {
      allFieldsFilled = false;
      missingFields.push("Username");
    }
    if (!email) {
      allFieldsFilled = false;
      missingFields.push("Email");
    }
    if (!img) {
      allFieldsFilled = false;
      missingFields.push("File");
    }
    if (!date) {
      allFieldsFilled = false;
      missingFields.push("Date");
    }
    if (!address) {
      allFieldsFilled = false;
      missingFields.push("Date");
    }
    if (!phone) {
      allFieldsFilled = false;
      missingFields.push("Phone");
    }
    if (!gender) {
      allFieldsFilled = false;
      missingFields.push("Phone");
    }
    if (allFieldsFilled) {
      const newUser = {
        username,
        email,
        img,
        date,
        address,
        phone,
        gender,
      };
      setValueData([...valueData, newUser]);

      e.target.reset();
    } else {
      setMissingFields(missingFields);
      alert(` Vui lòng nhập: ${missingFields}`);
    }
  };
  // xóa thông tin
  const hdlDel = (index) => {
    const updatedData = [...valueData];
    updatedData.splice(index, 1);
    setValueData(updatedData);
  };
  //
  const handleEdit = (index) => {};
  return (
    <div className="UserManagement">
      <form className="p-10" onSubmit={hdlSubmit}>
        <div className="d-flex justify-content-center gap-3">
          <div className="col-md-5">
            <div className="form-row col-md-12">
              <div className="form-group col-md-12">
                <label>Họ và tên</label>
                <input
                  name="username"
                  type="text"
                  className="form-control  rounded-0"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="form-group col-md-12">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control  rounded-0"
                  placeholder="email"
                />
              </div>
            </div>
            <div className="form-row col-md-12">
              <div className="form-group col-md-12">
                <label>Ảnh</label>
                <input
                  name="img"
                  type="file"
                  className="form-control  rounded-0"
                  onChange={handleFileInputChange}
                />
                {imageData && (
                  <div>
                    <h4>File ảnh đã chọn:</h4>
                    <img
                      src={URL.createObjectURL(imageData)}
                      alt="Uploaded"
                      style={{ width: "200px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="col-md-12">
              <label htmlFor="">Ngày sinh</label>
              <input
                type="date"
                className="rounded-0 form-control"
                name="date"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="">Giới tính</label>
              <select
                className="form-control rounded-0"
                placeholder="Chọn
              name
              "
                name="gender">
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="">Địa chỉ</label>
              <input
                name="address"
                type="text"
                placeholder="Địa chỉ"
                className="form-control rounded-0"
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="">Số điện thoại</label>
              <input
                name="phone"
                type="number"
                placeholder="Số điện thoại"
                className="form-control rounded-0"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto my-2 ">
          Tạo mới người dùng
        </button>
      </form>

      <table>
        <tbody>
          <tr>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Ngày sinh</th>
            <th>giới tính</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Ảnh</th>
            <th>Chỉnh sửa</th>
          </tr>
          {valueData &&
            valueData.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{i.username}</td>
                  <td>{i.email}</td>
                  <td>{i.date}</td>
                  <td>{i.gender}</td>
                  <td>{i.address}</td>
                  <td>{i.phone}</td>
                  <td>
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={URL.createObjectURL(i.img)}
                      alt="img"
                    />
                  </td>
                  <td>
                    <ul className="d-flex align-items-center m-0 p-0">
                      <button className="btn" onClick={() => handleEdit(index)}>
                        <i
                          className="fa-solid fa-pen-to-square"
                          style={{ color: "blue" }}></i>
                      </button>
                      <button
                        className="btn"
                        onClick={(index) => hdlDel(index)}>
                        <i
                          className="fa-solid fa-trash"
                          style={{ color: "red" }}></i>
                      </button>
                    </ul>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;

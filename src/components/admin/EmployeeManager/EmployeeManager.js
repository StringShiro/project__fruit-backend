import React from "react";
import "./EmployeeManager.scss";
const EmployeeManager = () => {
  return (
    <div className="EmployeeManager">
      <form>
        <div className="d-flex justify-content-center gap-3">
          <div className="form-row col-md-5">
            <div className="form-group col-md-12 mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control rounded-0"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Address</label>
              <input
                type="text"
                className="form-control rounded-0"
                id="inputAddress"
                placeholder="Địa chỉ"
              />
            </div>
          </div>
          <div className="form-row col-md-5">
            <div className="form-group col-md-12 mb-3">
              <label>Giới tính</label>
              <select className="form-control rounded-0" placeholder="Chọn">
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="form-group col-md-12">
              <label>Email</label>
              <input
                type="date"
                className="form-control rounded-0"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto my-2 ">
          Thêm nhân viên
        </button>
      </form>

      <table>
        <tbody>
          <tr>
            <th>Email</th>
            <th>Họ Và Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Sửa xóa</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
            <td className="d-flex gap-2">
              <button className="btn btn-primary">sửa</button>
              <button className="btn btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManager;

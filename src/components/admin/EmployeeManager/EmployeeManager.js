import React from "react";
import "./EmployeeManager.scss";
const EmployeeManager = () => {
  return (
    <div className="EmployeeManager">
      <form>
        <div className="d-flex justify-content-center gap-3">
          <div className="form-row col-md-4">
            <div className="form-group col-md-12">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Address</label>
              <input
                type="text"
                className="form-control "
                id="inputAddress"
                placeholder="Địa chỉ"
              />
            </div>
          </div>
          <div className="form-row col-md-4">
            <div className="form-group col-md-12">
              <label>Giới tính</label>
              <select className="form-control" placeholder="Chọn">
                <option>Nam</option>
                <option>Nữ</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="form-group col-md-12">
              <label>Email</label>
              <input
                type="date"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto my-2 ">
          Sign in
        </button>
      </form>

      <table>
        <tr>
          <th>Email</th>
          <th>Họ Và Tên</th>
          <th>Tuổi</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default EmployeeManager;

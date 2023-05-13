import React, { useState } from "react";
import "./AddNewProduct.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddNewProduct = () => {
  const [value, setValue] = useState("");
  const [imageData, setImageData] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const dataImg = reader.result;
      const imageDataUrl = new Blob([dataImg], { type: file.type });
      setImageData(imageDataUrl);
    };

    // reader.readAsDataURL(file);
    reader.readAsArrayBuffer(file);
  };
  return (
    <div className="AddNewProduct">
      <form className="p-10">
        <div className="d-flex justify-content-center gap-3">
          <div className="col-md-5">
            <div className="form-row col-md-12">
              <div className="form-group col-md-12">
                <label>Tên sản phẩm</label>
                <input
                  type="text"
                  className="form-control  rounded-0"
                  placeholder="Tên sản phẩm"
                />
              </div>
              <div className="form-group col-md-12">
                <label>Giá</label>
                <select className="form-control  rounded-0" placeholder="Chọn">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>
              </div>
            </div>
            <div className="form-row col-md-12">
              <div className="form-group col-md-12">
                <label>Ảnh</label>
                <input
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
            <label htmlFor="">Thông tin sản phẩm</label>
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              style={{ height: "" }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto my-2 ">
          Thêm mới sản phẩm
        </button>
      </form>

      <table>
        <tbody>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Thông tin sản phẩm</th>
            <th>Ảnh</th>
            <th>Sửa xóa</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
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

export default AddNewProduct;

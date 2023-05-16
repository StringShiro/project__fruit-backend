import React, { useState } from "react";
import "./AddNewProduct.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddNewProduct = () => {
  const [valueData, setValue] = useState([]);
  const [valueInforProcduct, setValueInforProcduct] = useState("");
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
  const hdlSubmit = (e) => {
    e.preventDefault();
    const nameproduct = e.target.nameproduct.value;
    const price = e.target.price.value;
    const img = e.target.img.files[0];
    const inforProduct = valueInforProcduct;
    const newUser = {
      nameproduct,
      price,
      img,
      inforProduct,
    };
    setValue([...valueData, newUser]);

    e.target.reset();
    console.log(valueData);
  };

  return (
    <div className="AddNewProduct">
      <form className="p-10" onSubmit={hdlSubmit}>
        <div className="d-flex justify-content-center gap-3">
          <div className="col-md-5">
            <div className="form-row col-md-12">
              <div className="form-group col-md-12">
                <label>Tên sản phẩm</label>
                <input
                  name="nameproduct"
                  type="text"
                  className="form-control  rounded-0"
                  placeholder="Tên sản phẩm"
                />
              </div>
              <div className="form-group col-md-12">
                <label>Giá</label>
                <select
                  name="price"
                  className="form-control  rounded-0"
                  placeholder="Chọn">
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
            <label htmlFor="">Thông tin sản phẩm</label>
            <ReactQuill
              theme="snow"
              value={valueInforProcduct}
              onChange={setValueInforProcduct}
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
          {valueData.length > 0 &&
            valueData.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{i.nameproduct}</td>
                  <td>{i.price}</td>
                  <td dangerouslySetInnerHTML={{ __html: i.inforProduct }}></td>
                  <td>
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={URL.createObjectURL(i.img)}
                      alt="img"
                    />
                  </td>
                  <td className="">
                    <button className="btn btn-primary m-1">sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AddNewProduct;

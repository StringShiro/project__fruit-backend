import React from "react";
import "./AddNewProduct.scss";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
const AddNewProduct = () => {
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  function handleEditorChange({ html, text }) {
    // console.log("handleEditorChange", html, text);
  }
  return (
    <div className="AddNewProduct">
      <form>
        <div className="d-flex justify-content-center gap-3">
          <div className="form-row col-md-4">
            <div className="form-group col-md-12">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tên sản phẩm"
              />
            </div>
            <div className="form-group col-md-12">
              <label>Giá</label>
              <select className="form-control" placeholder="Chọn">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <div className="form-row col-md-4">
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
        <MdEditor
          className="mx-auto my-2 col-9"
          style={{ height: "400px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
        <button type="submit" className="btn btn-primary d-block mx-auto my-2 ">
          Sign in
        </button>
      </form>

      <table>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
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

export default AddNewProduct;

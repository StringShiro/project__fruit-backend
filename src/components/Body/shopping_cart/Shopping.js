import React, { useState } from "react";
import "./Shopping.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import { Row, Col, Container } from "react-bootstrap";
// import Stores from "../../../data/stores.json";
export default function Shopping() {
  const [shoppingcards, setshoppingcards] = useState(false);
  const show = () => {};
  return (
    <>
      <Logosearch />

      <Container className="Container">
        <Row>
          <Col>
            {!show ? (
              <>
                <table>
                  <tbody>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Số tiền</th>
                      <th>Thao tác</th>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                        <div className="infor_product">
                          <img
                            src="https://media.discordapp.net/attachments/1077147401363673108/1078684718020694078/z4123790496140_bd86c52addf946ef6c4095f3aaeb5f60.jpg?width=336&height=597"
                            alt=""
                          />
                          <span>
                            Thôn
                            tinadasdasdhjbasdhjdsjbhbhjbjhasbdhajsbdhaadajdshasdnjkasndjkansdjkandjksdnajkn
                          </span>
                        </div>
                      </td>
                      <td>200.000Đ</td>
                      <td>
                        <button className="btn btn-success">-</button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="1"
                        />
                        <button className="btn btn-success">+</button>
                      </td>
                      <td>200.000Đ</td>
                      <td>
                        <button className="btn btn-danger">Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                        <div className="infor_product">
                          <img
                            src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                            alt=""
                          />
                          <span>Thôn tin sản phẩm</span>
                        </div>
                      </td>
                      <td>200.000Đ</td>
                      <td>
                        <button className="btn btn-success">-</button>
                        <input type="text" className="form-control" />
                        <button className="btn btn-success">+</button>
                      </td>
                      <td>200.000Đ</td>
                      <td>
                        <button className="btn btn-danger">Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                        <div className="infor_product">
                          <img
                            src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
                            alt=""
                          />
                          <span>Thôn tin sản phẩm</span>
                        </div>
                      </td>
                      <td>200.000Đ</td>
                      <td>
                        <button className="btn btn-success">-</button>
                        <input type="text" className="form-control" />
                        <button className="btn btn-success">+</button>
                      </td>
                      <td>200.000Đ</td>
                      <td>
                        <button className="btn btn-danger">Xóa</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="payment">
                  <div className="select">
                    <input type="checkbox" className="form-check-input" />
                    <span>Chọn Tất cả</span>
                    <button className="btn btn-danger">Xóa</button>
                  </div>
                  <div className="pay">
                    <div className="text-center">
                      <span>Tổng thanh toán</span>
                      <span>({`${0} Sản phẩm`}):</span>
                      <span> 0₫</span>
                    </div>
                    <button className="btn btn-success">Mua Ngay</button>
                  </div>
                </div>
              </>
            ) : (
              <table>
                <tbody>
                  <div className="no_card">
                    <div className="form_card">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                        alt=""
                      />
                      <p>Giỏ hàng của bạn đang trống</p>
                      <button className="btn btn-danger">Mua ngay</button>
                    </div>
                  </div>
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
      <Homefooter></Homefooter>
    </>
  );
}

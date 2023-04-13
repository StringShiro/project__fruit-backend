import React, { useState } from "react";
import "./Shopping.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity } from "../../../redux/cartSlice";
const Shopping = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cartSlice.product);

  const [quantity, setQuantity] = useState();

  const Oncl = () => {};
  const totalPrice = () => {
    let total = 0;
    product.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toLocaleString("en-US");
  };
  return (
    <>
      <Logosearch />
      <div className="Container">
        {product.length === 0 ? (
          <div className="no_card">
            <div className="form_card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                alt=""
              />
              <p>Giỏ hàng của bạn đang trống</p>
              <button className="btn btn-danger">
                <Link to={"/sanpham"}>Mua ngay</Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="has_card">
            <div className="form_has_card">
              <div className="stick">
                <button className="btn btn-danger">Chọn tất cả</button>
                <button className="btn btn-danger">Xóa tất cả</button>
              </div>
              {product.map((item, index) => {
                return (
                  <div className="infor_card" key={index}>
                    <input type="checkbox" className="form-check-input" />
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content_card">
                      <h5>Tên sản phẩm: {item.name}</h5>
                      <p>{`Thông tin: ...`}</p>
                      <p>Giá sản phẩm:{item.price}</p>
                      <div className="quantity">
                        <button
                          className="btn"
                          onClick={() =>
                            dispatch(increaseQuantity(item.quantity))
                          }
                        >
                          +
                        </button>
                        <input type="text" defaultValue={item.quantity} />
                        <button
                          className="btn"
                          onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                          }
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="delete_card">
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="form_payment">
              <div className="total">
                <h5>{totalPrice()}</h5>
              </div>
              <div className="payment">
                <h2>Thanh toán</h2>
                <div className="form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ và tên"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                  />
                  <div className="pay_momo">
                    <img src="" alt="" />
                  </div>
                  <div className="pay_momo">
                    <img src="" alt="" />
                  </div>
                  <button className="btn">Thanh toán</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Homefooter></Homefooter>
    </>
  );
};
export default Shopping;

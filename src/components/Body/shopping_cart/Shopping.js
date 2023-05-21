import React from "react";
import "./Shopping.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
  updatevalueinput,
} from "../../../redux/cartSlice";
const Shopping = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cartSlice.product);

  // Tăng quantity
  const handleOnclickI = (data) => {
    dispatch(increaseQuantity(data));
  };
  // giảm quantity
  const handleOnclickD = (data) => {
    dispatch(decreaseQuantity(data));
  };
  // cập nhật số lượng mới
  const inputonchange = (itemId, e) => {
    const newQuantity = Number(e.target.value);
    // Cập nhật số lượng sản phẩm cho sản phẩm có ID tương ứng
    const updatedProducts = product.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    dispatch(updatevalueinput({ product: updatedProducts }));
  };
  // tính tổng
  const totalPrice = () => {
    let total = 0;
    product.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toLocaleString("en-US");
  };
  return (
    <>
      <div className="Container">
        {product.length === 0 ? (
          <div className="no_card">
            <div className="form_card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                alt=""
              />
              <p>{t("shopping.empty_basket")}</p>
              <button className="btn">
                <Link to={"/sanpham"} className="link">
                  {t("shopping.buy_now")}
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="has_card">
            <div className="form_has_card">
              <div className="stick">
                <button className="btn btn-danger">
                  {t("shopping.select_all")}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(resetCart())}>
                  {t("shopping.del_all")}{" "}
                </button>
              </div>
              {product.map((item, index) => {
                return (
                  <div className="infor_card" key={index}>
                    <input type="checkbox" className="form-check-input" />
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content_card">
                      <h5>
                        {t("shopping.name_product")}: {item.name}
                      </h5>
                      <p>
                        {t("shopping.infor")}: {`...`}
                      </p>
                      <p>
                        {t("shopping.product_price")}:{item.price}
                      </p>
                      <div className="quantity">
                        <button
                          className="btn"
                          onClick={() => handleOnclickI(item)}>
                          +
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => inputonchange(item.id, e)}
                        />
                        <button
                          className="btn"
                          onClick={() => handleOnclickD(item)}>
                          -
                        </button>
                      </div>
                    </div>
                    <div className="delete_card">
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}>
                        {t("shopping.del")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="form_payment">
              <div className="total">
                <h5>
                  {t("shopping.total")}: {totalPrice()} VND
                </h5>
              </div>
              <div className="payment">
                <h2>{t("shopping.pay")}</h2>
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
                  <button className="btn">{t("shopping.pay")}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Shopping;

import React, { useState } from "react";
import "./Shopping.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Catelogy_Support";
const Shopping = () => {
  const datas = [];
  const { t } = useTranslation();
  // tính tổng

  const [quantity, setQuantity] = useState(1);

  const inputonchange = (e) => {
    const inputValue = Number(e.target.value);
    setQuantity(inputValue);
  };

  const totalPrice = () => {
    let total = 0;

    datas.forEach((data) => {
      total += data.quantity * data.productCurrency;
    });
    return total.toLocaleString("en-US");
  };
  const showData = () => {
    let product = localStorage.getItem("productCart");
    const productData = JSON.parse(product);
    productData.forEach((data) => {
      datas.push({
        id: data.id,
        productName: data.productName,
        productCurrency: data.productCurrency,
        productImage: data.productImage,
        quantity: quantity,
      });
    });
  };
  showData();

  const deleteAll = () => {
    let product = localStorage.getItem("productCart");
    const productData = JSON.parse(product)
    productData.remove()
    
  };
  const deleteOne = (e) => {
    const tag = e.target;
    const parent = tag.parentElement.parentElement;
    const parentId = parent.getAttribute("data-id");
    datas.splice(parentId, 1);
    parent.remove();
    localStorage.setItem("productCart", JSON.stringify(datas));
  };
  return (
    <>
      <Logosearch />
      <div className="Container">
        {datas.length >= 1 ? (
          <div className="has_card">
            <div className="form_has_card">
              <div className="stick">
                <label htmlFor="form-check-input">
                  <button className="btn btn-danger">Chọn tất cả</button>
                </label>
                <button className="btn btn-danger" onClick={deleteAll}>
                  Xóa tất cả
                </button>
              </div>
              {datas.map((data, index) => {
                return (
                  <div
                    className="infor_card"
                    id="informationCard"
                    key={index}
                    data-id={data.id}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="form-check-input"
                      name="form-check-input"
                    />
                    <div className="image">
                      <img src={data.productImage} alt="..." />
                    </div>
                    <div className="content_card">
                      <h5>Tên sản phẩm: {data.productName}</h5>
                      <p>{`Thông tin thêm ...`}</p>
                      <p>Giá sản phẩm:{data.productCurrency}</p>
                      <div className="quantity">
                        <button
                          className="btn"
                          onClick={() => setQuantity((prev) => prev + 1)}
                        >
                          +
                        </button>
                        <input
                          id="quantity"
                          type="text"
                          value={quantity}
                          onChange={(e) => inputonchange(e)}
                        />
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
                    <div className="delete_card delete" id="delete">
                      <button className="btn btn-danger" onClick={deleteOne}>
                        Xóa
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
        ) : (
          <div className="no_card">
            <div className="form_card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
                alt="..."
              />
              <p>Giỏ hàng của bạn đang trống</p>
              <button className="btn">
                <Link to={"/sanpham"} className="link">
                  Mua ngay
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <Homefooter />
    </>
  );
};
export default Shopping;

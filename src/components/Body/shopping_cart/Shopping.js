import React,{useState} from "react";
import "./Shopping.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Catelogy_Support"
const Shopping = () => {
  const [data, setData] = useState("");
  const { t } = useTranslation();
  // tính tổng
  const totalPrice = () => {
    let total = 0;
    data.forEach((item) => {
      total += item.quantity * item.productCurrency;
    });
    return total.toLocaleString("en-US");
  };
  const showData = async () => {
    let product = await localStorage.getItem("productCart");
    const productData = await JSON.parse(product);
    setData(productData);
  };
  
  window.onloadeddata = showData
  
  return (
    <>
    <Logosearch/>
      <div className="Container">
        {data.length === 0 ? (
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
        ) : (
          <div className="has_card">
            <div className="form_has_card">
              <div className="stick">
                <button className="btn btn-danger">Chọn tất cả</button>
                <button className="btn btn-danger">Xóa tất cả</button>
              </div>
              {data.map((item, index) => {
                return (
                  <div className="infor_card" key={index}>
                    <input type="checkbox" className="form-check-input" />
                    <div className="image">
                      <img src={item.productImage} alt="" />
                    </div>
                    <div className="content_card">
                      <h5>Tên sản phẩm: {item.productName}</h5>
                      <p>{`Thông tin thêm ...`}</p>
                      <p>Giá sản phẩm:{item.productCurrency}</p>
                      <div className="quantity">
                        <button className="btn">+</button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) => {}}
                        />
                        <button className="btn">-</button>
                      </div>
                    </div>
                    <div className="delete_card">
                      <button className="btn btn-danger">Xóa</button>
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
      <Homefooter/>
    </>
  );
};
export default Shopping;

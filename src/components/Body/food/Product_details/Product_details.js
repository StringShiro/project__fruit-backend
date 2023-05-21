import React, { useState } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import "./Product_details.scss";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";
import { useTranslation } from "react-i18next";
const Productdetails = (props) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const dataproduct = useSelector((state) => state.cartSlice.dataproduct);
  const dispatch = useDispatch();
  const inputonchange = (e) => {
    const inputValue = Number(e.target.value);

    setQuantity(inputValue);
  };
  return (
    <>
      <div className="Product_details">
        {dataproduct.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="column-xs-12 column-md-7">
                <div className="product-gallery">
                  <div className="product-image">
                    <img className="active" src={item.img} alt="" />
                  </div>
                  <ul className="image-list">
                    <li className="image-item">
                      <img src={item.img} alt="" />
                    </li>
                    <li className="image-item">
                      <img src={item.img} alt="" />
                    </li>
                    <li className="image-item">
                      <img src={item.img} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column-xs-12 column-md-6 col-6">
                <h1>
                  {" "}
                  {t("Product_details.name_product")}:{item.name}
                </h1>
                <h2>
                  {t("Product_details.product_price")}: {item.price}
                </h2>
                <div className="description">
                  <p>{t("Product_details.content")}</p>
                </div>
                <div className="d-flex ">
                  <div className="quantity">
                    <button
                      className="btn"
                      onClick={() => setQuantity((prev) => prev + 1)}>
                      +
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => inputonchange(e)}
                    />
                    <button
                      className="btn"
                      onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                      }>
                      -
                    </button>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          img: item.img,
                          name: item.name,
                          price: item.price,
                          quantity,
                        })
                      )
                    }>
                    {t("Product_details.add_to_cart")}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Product_details_comment">
        <div className="comment">
          <h5> {t("Product_details.comment")}</h5>
          <ul>
            <p>{t("Product_details.evaluate")}</p>
            <StarRating />
          </ul>
          <ul>
            <p>{t("Product_details.my_comment")}</p>
            <textarea className="form-control" rows={5}></textarea>
          </ul>
          <ul className="last">
            <li>
              <p>{t("Product_details.name_product")}</p>
              <input className="form-control" type="text" />
            </li>
            <li>
              <p>Email</p>
              <input className="form-control" type="email" />
            </li>
          </ul>
          <button className="btn submit">{t("Product_details.submit")}</button>
        </div>
      </div>
    </>
  );
};

export default Productdetails;

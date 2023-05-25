import React, { useState } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import "./Product_details.scss";
import StarRating from "./StarRating";
import Homefooter from "../../../Footer/Catelogy_Support";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../../../redux/cartSlice";
// import { address } from "../productRender";
const Productdetails = (props) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState("");
  const dataproduct = useSelector((state) => state.cartSlice.dataproduct);
  // const dispatch = useDispatch();
  const inputonchange = (e) => {
    const inputValue = Number(e.target.value);

    setQuantity(inputValue);
  };
  // const redirect = () => {
  //   window.location = "/shopping";
  // };

  const showdata = async () => {
    const localstorage = await localStorage.getItem("productData");
    const productData = await JSON.parse(localstorage);
    const productImage = document.getElementById("productImage");
    const productName = document.getElementById("productName");
    const productCurrency = document.getElementById("productCurrency");
    const productDetail = document.getElementById("productDetail");

    // gallery IMAGE

    const productImage1 = document.getElementById("productImage1");
    const productImage2 = document.getElementById("productImage2");
    const productImage3 = document.getElementById("productImage3");

    productData.map((datas) => {
      productDetail.setAttribute("data-id", datas.id);
      productImage.src = datas.productImage;
      productName.textContent = datas.productName;
      productCurrency.textContent = datas.productCurrency;
    });
  };
  const productCart = [];
  const addTocart = async () => {
    const productDetail = document.getElementById("productDetail");
    const productImage = document.getElementById("productImage");
    const productName = document.getElementById("productName");
    const productCurrency = document.getElementById("productCurrency");
    const productQuality = document.getElementById("prductQuality");

    const productN = productName.textContent;
    const productC = productCurrency.textContent;
    const productI = productImage.src;
    const productQ = productQuality.value;
    const productId = productDetail.getAttribute("data-id");
    
    if (productId) {
      productCart.push({
        id: productId,
        productName: productN,
        productCurrency: productC,
        productImage: productI,
        quantity: productQ,
      });
    }
    
    localStorage.setItem("productCart", JSON.stringify(productCart));
  };

  window.onload = showdata;

  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details" id="productDetail">
        <div className="flex">
          <div className="column-xs-12 column-md-7">
            <div className="product-gallery">
              <div className="product-image">
                <img id="productImage" src="..." alt="..." />
              </div>
              <div className="productGallery">
                <div id="productImageGallery">
                  <img src="..." alt="..." id="productImage1" />
                </div>
                <div id="productImageGallery">
                  <img src="..." alt="..." id="productImage2" />
                </div>
                <div id="productImageGallery">
                  <img src="..." alt="..." id="productImage3" />
                </div>
              </div>
            </div>
          </div>
          <div className="column-xs-12 column-md-6 col-6">
            <h1 className="productname" id="productName">
              {data.productname}
            </h1>
            <h2 className="currency" id="productCurrency">
              {data.currency} VND{" "}
            </h2>
            <div className="description">
              <p>content</p>
            </div>
            <div className="d-flex ">
              <div className="quantity">
                <button
                  className="btn"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
                <input
                  type="text"
                  value={quantity}
                  id="prductQuality"
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
              <button className="add-to-cart" onClick={addTocart}>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
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

      <Homefooter />
    </>
  );
};

export default Productdetails;

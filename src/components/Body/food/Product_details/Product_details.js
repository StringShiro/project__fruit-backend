import React, { useState } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import "./Product_details.scss";
import StarRating from "./StarRating";
import Homefooter from "../../../Footer/Home_footer";
// import  Axios  from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";
// import { address } from "../productRender";
const Productdetails = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState("");
  const dataproduct = useSelector((state) => state.cartSlice.dataproduct);
  const dispatch = useDispatch();

  const inputonchange = (e) => {
    const inputValue = Number(e.target.value);

    setQuantity(inputValue);
  };
  // const redirect = () => {
  //   window.location = "/shopping";
  // };

  const showdata = () => {
    let productData = JSON.parse(localStorage.getItem("productData"));
    const image = document.querySelector(".product-gallery .product-image img");
    const productname = document.querySelector(".productname");
    const currency = document.querySelector(".currency");
    const productDetail = document.querySelector(".Product_details");

    productData.map((data) => {
      productDetail.setAttribute("data-id", data.id);
      productname.textContent = data.productname;
      currency.textContent = data.currency;
      image.src = data.image;
      dispatch(
        addToCart({
          id: data.id,
          img: data.image,
          name: data.productname,
          currency: data.currency,
          quantity,
        }))
      
    });
  };
  window.onload = showdata;

  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details">
        <div className="flex">
          <div className="column-xs-12 column-md-7">
            <div className="product-gallery">
              <div className="product-image">
                <img className="active" src={data.image} alt="" />
              </div>
              
            </div>
          </div>
          <div className="column-xs-12 column-md-6 col-6">
            <h1 className="productname">{data.productname}</h1>
            <h2 className="currency">{data.currency} VND </h2>
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
              <button
                className="add-to-cart"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: data.id,
                      img: data.image,
                      name: data.productname,
                      price: data.currency,
                      quantity,
                    }))
                }
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Product_details_comment">
        <div className="comment">
          <h5>Nhận xét sản phẩm này</h5>
          <ul>
            <p>Đánh giá của bạn</p>
            <StarRating />
          </ul>
          <ul>
            <p>Nhận xét của bạn</p>
            <textarea className="form-control" rows={5}></textarea>
          </ul>
          <ul className="last">
            <li>
              <p>Tên</p>
              <input className="form-control" type="text" />
            </li>
            <li>
              <p>Email</p>
              <input className="form-control" type="email" />
            </li>
          </ul>
          <button className="btn submit">Gửi đi</button>
        </div>
      </div>

      <Homefooter />
    </>
  );
};

export default Productdetails;

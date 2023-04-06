import React, { Fragment, useState, createContext } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import { connect } from "react-redux";
import "./Product_details.scss";
import { getdataProduct } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";
const Productdetails = (props) => {
  const getdataProducts = useSelector(getdataProduct);
  console.log("check useSelector", getdataProducts);
  const AddToCart = (addtocart) => {
    console.log(addtocart);
  };
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < getdataProducts.lenght + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  // const ShopContextProvider = (props) => {
  //   const [cartItem, SetCartItem] = useState(getDefaultCart);
  //   const addToCart = (itemId) => {
  //     SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   };
  //   const removeFromCart = (itemId) => {
  //     SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  //   };
  //   const contextValue = { cartItem, addToCart, removeFromCart };
  //   return (
  //     <ShopContextProvider.Provider>
  //       {props.children}
  //     </ShopContextProvider.Provider>
  //   );
  // };
  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details">
        {getdataProducts &&
          getdataProducts.map((item) => {
            return (
              <div className="flex" key={item.id}>
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
                  <h1>{item.name}</h1>
                  <h2>{item.price}</h2>
                  <div className="description">
                    <p>content</p>
                  </div>
                  <div className="d-flex ">
                    <div className="quantity">
                      <button className="btn">+</button>
                      <input type="number" />
                      <button className="btn">-</button>
                    </div>
                    <button
                      className="add-to-cart"
                      onClick={() => AddToCart(item)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
    </>
  );
};
const mapStateToProps = (state) => {
  return { addtocart: state.addtocart };
};
export default connect(mapStateToProps)(Productdetails);

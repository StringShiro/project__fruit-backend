import React from "react";
import Logosearch from "../../../header/logo/Logo_search";
import "./Product_details.scss";
import { getdataProduct, getaddtocart } from "../../../../redux/selectors";
import { useSelector, useDispatch, connect } from "react-redux";
import actions from "../../../../redux/action";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";
const Productdetails = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getdataProducts = useSelector(getdataProduct);
  console.log("getdataProducts", getdataProducts);
  const AddToCart = (data) => {
    let getdata = dispatch(actions.addToCart(data));
    console.log(getdata);
    // return navigate(`/shopping`);
  };
  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details">
        {getdataProducts.map((item, index) => {
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
  return { addtocart: state.dataAddToCart };
};
export default connect(mapStateToProps)(Productdetails);

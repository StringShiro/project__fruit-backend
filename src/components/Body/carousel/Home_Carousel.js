import "./Home_Carousel.scss";
import React, { useState } from "react";
export default function HomeCarousel() {
  const [active, setActive] = useState(false);
  const handleOnclick = () => {
    console.log(active);
  };
  return (
    <>
      <div className="Home_Carousel">
        <div className="content">
          <h5 onClick={handleOnclick}>Sản phẩm phổ biến</h5>
          <h5 onClick={handleOnclick}>Sản phẩm khuyến mãi</h5>
          <h5 onClick={handleOnclick}>Sản phẩm mới</h5>
        </div>

        <ul className="list_product">
          <li>
            <div className="list_product_img">
              <img
                src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.15752-9/329193793_3414655672083245_3006518930087245934_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=T0vvnKPKIvAAX9IVwgL&_nc_ht=scontent.fsgn1-1.fna&oh=03_AdTcXeKIMPRuYRD6eE1uIkIO8WAuJ2-ZgVd52KYIpBnn_Q&oe=64266D56"
                alt=""
              />
            </div>
            <div className="infor_list_product">
              <p className="name_product">Name-product</p>
              <p className="price_product">$200</p>
              <button type="button" className="add_product  btn btn-danger">
                Thêm vào giỏ
              </button>
            </div>
          </li>
          <li>
            <div className="list_product_img">
              <img
                src="https://ik.imagekit.io/fruitcompany/H%C3%ACnh_c%C3%B3_gi%C3%A1/2?ik-sdk-version=javascript-1.4.3&updatedAt=1677337524550"
                alt=""
              />
            </div>
            <div className="infor_list_product">
              <p className="name_product">Name-product</p>
              <p className="price_product">$200</p>
              <button type="button" className="add_product  btn btn-danger">
                Thêm vào giỏ
              </button>
            </div>
          </li>
          <li>
            <div className="list_product_img">
              <img
                src="https://ik.imagekit.io/fruitcompany/H%C3%ACnh_c%C3%B3_gi%C3%A1/2?ik-sdk-version=javascript-1.4.3&updatedAt=1677337524550"
                alt=""
              />
            </div>
            <div className="infor_list_product">
              <p className="name_product">Name-product</p>
              <p className="price_product">$200</p>
              <button type="button" className="add_product  btn btn-danger">
                Thêm vào giỏ
              </button>
            </div>
          </li>
          <li>
            <div className="list_product_img">
              <img
                src="https://ik.imagekit.io/fruitcompany/H%C3%ACnh_c%C3%B3_gi%C3%A1/2?ik-sdk-version=javascript-1.4.3&updatedAt=1677337524550"
                alt=""
              />
            </div>
            <div className="infor_list_product">
              <p className="name_product">Name-product</p>
              <p className="price_product">$200</p>
              <button type="button" className="add_product  btn btn-danger">
                Thêm vào giỏ
              </button>
            </div>
          </li>
          <li>
            <div className="list_product_img">
              <img
                src="https://ik.imagekit.io/fruitcompany/H%C3%ACnh_c%C3%B3_gi%C3%A1/2?ik-sdk-version=javascript-1.4.3&updatedAt=1677337524550"
                alt=""
              />
            </div>
            <div className="infor_list_product">
              <p className="name_product">Name-product</p>
              <p className="price_product">$200</p>
              <button type="button" className="add_product  btn btn-danger">
                Thêm vào giỏ
              </button>
            </div>
          </li>
          <li>
            <div className="list_product_img">
              <img
                src="https://ik.imagekit.io/fruitcompany/H%C3%ACnh_c%C3%B3_gi%C3%A1/2?ik-sdk-version=javascript-1.4.3&updatedAt=1677337524550"
                alt=""
              />
            </div>
            <div className="infor_list_product">
              <p className="name_product">Name-product</p>
              <p className="price_product">$200</p>
              <button type="button" className="add_product  btn btn-danger">
                Thêm vào giỏ
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

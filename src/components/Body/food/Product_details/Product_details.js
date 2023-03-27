import React, { Fragment } from "react";
import Logosearch from "../../../header/logo/Logo_search";
import { connect } from "react-redux";
import "./Product_details.scss";
const Productdetails = (props) => {
  // const dataredux = props;
  return (
    <>
      <Logosearch></Logosearch>
      <div className="Product_details">
        <main>
          <div className="container">
            <div className="grid product">
              <div className="column-xs-12 column-md-7">
                <div className="product-gallery">
                  <div className="product-image">
                    <img
                      className="active"
                      src="https://source.unsplash.com/W1yjvf5idqA"
                      alt=""
                    />
                  </div>
                  <ul className="image-list">
                    <li className="image-item">
                      <img
                        src="https://source.unsplash.com/W1yjvf5idqA"
                        alt=""
                      />
                    </li>
                    <li className="image-item">
                      <img
                        src="https://source.unsplash.com/VgbUxvW3gS4"
                        alt=""
                      />
                    </li>
                    <li className="image-item">
                      <img
                        src="https://source.unsplash.com/5WbYFH0kf_8"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column-xs-12 column-md-5">
                <h1>Bonsai</h1>
                <h2>$19.99</h2>
                <div className="description">
                  <p>
                    The purposes of bonsai are primarily contemplation for the
                    viewer, and the pleasant exercise of effort and ingenuity
                    for the grower.
                  </p>
                  <p>
                    By contrast with other plant cultivation practices, bonsai
                    is not intended for production of food or for medicine.
                  </p>
                </div>
                <button className="add-to-cart">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { data: state.users };
};
export default connect(mapStateToProps)(Productdetails);

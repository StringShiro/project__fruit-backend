import React from "react";
import "./Introduce.scss";
import Logo_search from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
function Introduce() {
  return (
    <>
      <Logo_search></Logo_search>
      <div className="introduce">
        <div className="introduce_pane">
          <div className="introduce_background">
            <img
              src="https://media.discordapp.net/attachments/1077147401363673108/1077148205575323658/z4123791318980_5d98cdb9de9e4890a9153cd3442d1f97.jpg?width=598&height=598"
              alt=""
            />
          </div>
          <div className="introduce_content_head">
            <h1>Giới thiệu</h1>
            <span>
              Chào mừng bạn đến với HealthyRoo! Tại đây chúng tôi có những sản
              phẩm có nguồn gốc chính từ thiên nhiên, được xuất xứ từ Miền Tây
              Nam Bộ Việt Nam
            </span>
            <h1>Sản phẩm</h1>
            <span>
              Sản phẩm được sấy dẻo và vẫn giữ nguyên vị của trái cây tươi rất
              tiện lợi cho cả nhà có thể dùng làm quà tặng cho người thân trong
              gia đình, người ngoài nước để giới thiệu về nông sản của Việt Nam
            </span>
          </div>
        </div>
        <div className="introduce_content_body">
          <div className="content_pane">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3447/3447661.png"
            />

            <div className="content">
              <h4>Chăm sóc khách hàng</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </div>
          <div className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/628/628586.png"
              />
            </div>
            <div className="content">
              <h4>Sản phẩm mới</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </div>
          <div className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/4497/4497546.png"
              />
            </div>
            <div className="content">
              <h4>Hàng chính hãng</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </div>
          <div className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/1989/1989125.png"
              />
            </div>
            <div className="content">
              <h4>Thanh toán đa dạng</h4>
              <span>
                Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình ảnh đều là những
                bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
                ngừng phát triển lớn mạnh
              </span>
            </div>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

export default Introduce;

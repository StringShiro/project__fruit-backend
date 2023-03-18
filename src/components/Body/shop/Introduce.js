import React from "react";
import "./Introduce.scss";
import Logo_search from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
function Introduce() {
  return (
    <>
      <Logo_search></Logo_search>
      <div className="">
        <div className="introduce">
          <div className="introduce_background">
            <img
              src="https://media.discordapp.net/attachments/1077147401363673108/1077148205575323658/z4123791318980_5d98cdb9de9e4890a9153cd3442d1f97.jpg?width=598&height=598"
              alt=""
            />
          </div>
          <div className="introduce_content">
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
          <div className="">
            <div className="">
              <img alt="" />
            </div>
          </div>
        </div>
      </div>
      <Homefooter></Homefooter>
    </>
  );
}

export default Introduce;

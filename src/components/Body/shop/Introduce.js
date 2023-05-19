import React from "react";
import "./Introduce.scss";
import Logosearch from "../../header/logo/Logo_search";
import Homefooter from "../../Footer/Home_footer";
import { useTranslation } from "react-i18next";
function Introduce() {
  const { t } = useTranslation();
  return (
    <>
      <Logosearch />
      <div className="introduce">
        <div className="introduce_pane">
          <div className="introduce_background">
            <img
              src="https://media.discordapp.net/attachments/1077147401363673108/1077148205575323658/z4123791318980_5d98cdb9de9e4890a9153cd3442d1f97.jpg?width=598&height=598"
              alt=""
            />
          </div>
          <div className="introduce_content_head">
            <h1>{t("infor.infor")}</h1>
            <span>{t("infor.greeting")}</span>
            <h1>{t("navbar.product")}</h1>

            <div className="product_introduction">
              <p>{t("infor.product_infor.infor1")}</p>
              <div className="bar"></div>
              <p>{t("infor.product_infor.infor2")}</p>
            </div>
          </div>
        </div>
        <div className="introduce_content_body">
          <div className="content_pane">
            <div className="image">
              <img
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/3447/3447661.png"
              />
            </div>

            <div className="content">
              <h4>{t("infor.customer_care.text")}</h4>
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
              <h4>{t("infor.new_product")}</h4>
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
              <h4>{t("infor.genuine.text")}</h4>
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
              <h4>{t("infor.Diverse_payment")}</h4>
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

import React from "react";
import "./Catelogy_Support.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function CatelogySupport() {
  const { t } = useTranslation();
  return (
    <div className="wrap">
      <ul>
        <h3 className="my-2">Healthy-Roo</h3>
        <div className="Catelogy_Support">
          <ul>
            <h6>{t("footer.contact")}</h6>
            <li>{t("footer.addressShop")}</li>
            <li>
              <i className="fa-solid fa-phone"></i>CSKH: 090.249.2749
            </li>
            <li>
              <i className="fa-solid fa-earth-americas" />
              Gmail
            </li>
            <li>
              <ul>
                <li>
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <h6>MENU</h6>

            <li>
              <Link className="Link" to={"/"}>
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link className="Link" to={"/gioithieu"}>
                {t("footer.introduce")}
              </Link>
            </li>
            <li>
              <Link className="Link" to={"/sanpham"}>
                {t("footer.product")}
              </Link>
            </li>
            <li>
              <Link className="Link" to={"/lienhe"}>
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
          <ul>
            <h6> {t("footer.account")}</h6>
            <li>
              <span> {t("footer.account_information")}</span>
            </li>
            <li>
              <span>{t("footer.notification")}</span>
            </li>
            <li>
              <span>{t("footer.order_management")}</span>
            </li>
            <li>
              <span>{t("footer.product_evaluation")}</span>
            </li>
          </ul>
          <ul>
            <h6>{t("footer.register")}</h6>
            <li>
              <span>{t("footer.registration_information")}</span>
            </li>
            <div className="form_check">
              <input type="text" name="" id="" placeholder="Email..." />
              <button>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </ul>
        </div>
        <div className="Footer_home">
          <div className="nav_footer">
            <h4>Heathy-Roo © 2023</h4>
            <img
              src="https://ik.imagekit.io/fruitcompany/project__fruit/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677304413280"
              alt=""
            />
          </div>
        </div>
      </ul>
    </div>
  );
}

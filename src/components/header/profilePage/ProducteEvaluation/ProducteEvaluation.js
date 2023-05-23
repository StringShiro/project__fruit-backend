import React from "react";
import "./ProducteEvaluation.scss";
import Bell from "../../../../img/bell.png";
import { useTranslation } from "react-i18next";
const ProducteEvaluation = () => {
  const { t } = useTranslation();
  return (
    <div className="Col_content">
      <div className="form-profile">
        <div className="profile__header">
          <div className="d-flex justify-content-center">
            <img src={Bell} alt="img" />
          </div>
          <h4>{t("profilePage.product_evaluation.no_evaluation")}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProducteEvaluation;

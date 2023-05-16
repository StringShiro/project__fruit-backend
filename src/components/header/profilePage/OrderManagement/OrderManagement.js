import React from "react";
import "./OrderManagement.scss";
import Bell from "../../../../img/bell.png";
import { useTranslation } from "react-i18next";
const OrderManagement = () => {
  const { t } = useTranslation();
  return (
    <div className="Col_content">
      <div className="form-profile">
        <div className="profile__header">
          <div className="d-flex justify-content-center">
            <img src={Bell} alt="img" />
          </div>
          <h4>{t("profilePage.order_management.no_orders")}</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;

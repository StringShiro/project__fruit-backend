import React, { useState } from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image, Row, Col, Container } from "react-bootstrap";

export default function ProfilePage() {
  return (
    <>
      <Logosearch />
      <Container className="ProfilePage">
        <Row>
          <Col className="Col_infor" xl={3}>
            <div className="infor">
              <div className="image">
                <Image
                  src="https://media.discordapp.net/attachments/1077147401363673108/1077147615742935070/Logo_web.jpg?width=598&height=598"
                  alt=""
                  fluid
                  rounded
                  width={"50px"}
                  height={"50px"}
                />
              </div>
              <div className="user_name">
                <span>Phước trí huỳnh</span>
                <div className="edit_user">
                  <i className="fa-solid fa-pen"></i>
                  <span>Sửa hồ sơ</span>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <i className="fa-solid fa-user"></i>
                <span>Tài khoản của tôi</span>
              </li>
              <li>Hồ sơ</li>
              <li>Ngân hàng</li>
              <li>Địa chỉ</li>
              <li>Đổi mật khẩu</li>
              <li>
                <i className="fa-solid fa-newspaper"></i>
                <span>Đơn mua</span>
              </li>
              <li>
                <i className="fa-solid fa-bell"></i>
                <span>Thông Báo</span>
              </li>
            </ul>
          </Col>
          <Col className="Col_content" xl={8}>
            <span>Hồ sơ của tôi</span>
            <p>quản lý thông tin hồ sơ cần xử lý</p>
            <form>
              <div className="form-group">
                <span>Tên Đăng Nhập</span>
                <input type="text" className="form-control" placeholder="Tên" />
              </div>
              <div className="form-group">
                <span>Họ và tên</span>
                <input type="text" className="form-control" placeholder="Tên" />
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tên"
                />
              </div>
              <div className="form-group">
                <span>Check</span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tên"
                />
              </div>
              <div className="form-group">
                <span>Phone Number</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Tên"
                />
              </div>
              <div className="form-group">
                <span>date</span>
                <input className="form-control" placeholder="để đây" />
              </div>

              <button type="submit" className="btn btn-danger">
                Gửi
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

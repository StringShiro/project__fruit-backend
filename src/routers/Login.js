import "./Login.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { checkValidate } from "./validate";
import { checkValidateRegister } from "./validate";
import Logosearch from "../components/header/logo/Logo_search";
import Axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");
  let [authMode, setAuthMode] = useState("signin");
  let [showPassword, setShowPassword] = useState({
    isShow: false,
  });
  
  const [datastored, setDatastored] = useState("")
  const Storage = localStorage.setItem('datastored',datastored)
  console.log(Storage)
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const onClickShow = () => {
    setShowPassword(!showPassword);
  };

  const data = {
    username: username,
    password: password,
    passwordconfirm: passwordconfirm,
    email: email,
    phone: phone,
  };

  const registerAxios = async () => {
    try {
      await Axios.post("http://127.0.0.1:3002/users/api/register", data)
        .then((res) => {

          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const axios = async (data) => {
    try {
      await Axios.post(`http://127.0.0.1:3002/users/api/login`, data)
        .then((res) => {
          const datastg = JSON.stringify(res.data)
          setDatastored(datastg)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });

      if (await Axios.post(`http://127.0.0.1:3002/users/api/login`, data)) {
        redirect(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkValidateRegister(data);
    registerAxios(data)
  };
  const redirect = (data) => {
    window.location = `http://localhost:3000/ProfilePage/${data.username}`;
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    checkValidate(data);
    axios(data);
  };
  //---------------------------------------------------------------------------------------------------------------------
  if (authMode === "signin") {
    return (
      <>
        <div className="Auth-form-container">
          <Toaster position="top-right" reverseOrder={false}></Toaster>
          <form className="Auth-form" method="get" onSubmit={handleSubmitLogin}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Đăng nhập</h3>
              <div className="text-center">
                Chưa đăng ký? {""}
                <span className="link-primary" onClick={changeAuthMode}>
                  Đăng ký
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter username"
                  value={username || ""}
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-3 input_password">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password || ""}
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <i
                  className={
                    showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                  }
                  onClick={onClickShow}></i>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <Link href="">password?</Link>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      {" "}
      <div className="Auth-form-container">
        <Toaster position="top-right" reverseOrder={false}></Toaster>
        <form className="Auth-form" onSubmit={handleSubmit} method="post">

          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Đăng ký</h3>
            <div className="text-center">
              Đã Đăng ký?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Đăng Nhập
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Họ và tên</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                value={username || ""}
                name="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email "
                value={email || ""}
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Mật khẩu</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password || ""}
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Điền lại Mật khẩu</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="passwordconfirm"
                value={passwordconfirm || ""}
                name="passwordconfirm"
                onChange={(e) => {
                  setPasswordconfirm(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Phone"
                value={phone || ""}
                name="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Đăng ký
              </button>
            </div>
            <p className="text-center mt-2">
              Quên mật khẩu <Link to={"#"}>Mật khẩu?</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

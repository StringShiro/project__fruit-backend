import "./Login.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { checkUserName } from "./validate";
export default function Login() {
  let [authMode, setAuthMode] = useState("signin");
  let [showPassword, setShowPassword] = useState({
    isShow: false,
  });
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  const onClickShow = () => {
    setShowPassword(!showPassword);
  };
  //---------------------------------------------------------------------------------------------------------------------
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: checkUserName,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  //---------------------------------------------------------------------------------------------------------------------
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <Toaster position="top-right" reverseOrder={false}></Toaster>
        <form className="Auth-form" onSubmit={formik.handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                {...formik.getFieldProps("username")}
                type="text"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3 input_password">
              <label>Password</label>
              <input
                {...formik.getFieldProps("password")}
                type={showPassword ? "text" : "password"}
                className="form-control mt-1"
                placeholder="Enter password"
              />
              <i
                className={
                  showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                }
                onClick={onClickShow}
              ></i>
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
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <Link to={"#"}>password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

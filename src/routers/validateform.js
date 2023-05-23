import toast from "react-hot-toast";

export async function checkUserName(values) {
  const errors = checkValidate({}, values);
  return errors;
}

function checkValidate(
  errors = {},
  values = { username: "username", password: "password" }
) {
  if (!values.username) {
    errors.username = toast.error("Nhập email");
  } else if (values.username.includes(" ")) {
    errors.username = toast.error("Invalid username");
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = toast.error(`Email không hợp lệ `);
  } else {
    errors.username = toast.success("success username");
  }

  // password

  if (!values.password) {
    errors.password = toast.error("Nhập mật khẩu");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Mật khẩu không hợp lệ");
  } else if (values.password.length < 4 || values.password.length >= 10) {
    errors.password = toast.error(
      ` ${
        values.password.length < 4
          ? " Mật khẩu gồm 4 kí tự trở trên"
          : values.password.length >= 10
          ? " Mật khẩu tối đa gồm 10 kí tự"
          : ""
      }   `
    );
  } else if (!values.password) {
    errors.password = toast.error("password must have special");
  } else {
    errors.username = toast.success("Nhập Mật khẩu thành công");
  }
  return errors;
}
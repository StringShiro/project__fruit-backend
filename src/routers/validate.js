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
    errors.username = toast.error("User name Required");
  } else if (values.username.includes(" ")) {
    errors.username = toast.error("Invalid username");
  } else {
    errors.username = toast.success("success username");
  }

  // password
  const reguarExp = new RegExp("");
  if (!values.password) {
    errors.password = toast.error("password Required");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Invalid password");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more ");
  } else if (!reguarExp.test(values.password)) {
    errors.password = toast.error("password must have special");
  } else {
    errors.username = toast.success("success password");
  }
  return errors;
}

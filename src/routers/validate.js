import toast from "react-hot-toast";
import axios from "axios";

export function checkValidate(data) {
  const errors = checkFields({}, data);
  return errors;
}

async function checkUsername(errors, data) {
  const datas = await data;
  if (datas.username === "") {
    errors.datas.username = await toast.error("username không được để trống");
  } else if (datas.username.length < 5) {
    errors.datas.username = await toast.error("username không được < 5 ký tự");
  } else if (datas.username.length > 10) {
    errors.datas.username = await toast.error("username không được < 10 ký tự");
  } else {
    errors.datas.username = await datas.username;
  }
}
async function checkPassword(errors, data) {
  const datas = await data;
  if (datas.password === "") {
    errors.datas.password = await toast.error("password không được để trống");
  } else {
    errors.datas.password = await datas.password;
  }
}
function checkFields(errors = {}, data) {
  checkPassword(errors, data);
  checkUsername(errors, data);

  return errors;
}

export function checkValidateregister(data) {
  const errors = checkField({}, data);
  return errors;
}

function checkField(errors = {}, data) {
  checkPassword(errors, data);
  checkUsername(errors, data);
  return errors;
}
// if(values.password === undefined){
//   console.log(values.password)
//   errors.password = toast.error("password không được để trống");
// }else{

// }

// if(values.password === " "){
//   errors.password = toast.error("password không được để trống");
// }
// if(values.password === null){
//   errors.password = toast.error("password không được để trống");
// }

// if (!values.username) {
//   errors.username = toast.error("Nhập email");
// } else if (values.username.includes(" ")) {
//   errors.username = toast.error("Invalid username");
// } else if (
//   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
// ) {
//   errors.email = toast.error(`email không hợp lệ `);
// } else {
//   errors.username = toast.success("success username");
// }

// password

// if (!values.password) {
//   errors.password = toast.error("Nhập mật khẩu");
// } else if (values.password.includes(" ")) {
//   errors.password = toast.error("Mật khẩu không hợp lệ");
// } else if (values.password.length < 4 || values.password.length >= 10) {
//   errors.password = toast.error(
//     ` ${
//       values.password.length < 4
//         ? " Mật khẩu gồm 4 kí tự trở trên"
//         : values.password.length >= 10
//         ? " Mật khẩu tối đa gồm 10 kí tự"
//         : ""
//     }   `
//   );
// } else if (!values.password) {
//   errors.password = toast.error("password must have special");
// } else {
//   errors.password = toast.success("Nhập Mật khẩu thành công");
// }

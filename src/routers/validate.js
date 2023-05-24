import toast from "react-hot-toast";
export async function checkValidateRegister(data) {
  const errors = checkFields({}, data);
  return errors;
}

export async function checkValidate(data) {
  const errors = checkField({}, data);
  return errors;
}

function checkField(errors = {}, data) {
  checkPassword(errors, data);
  checkUsername(errors, data);
  return errors;
}

function checkFields(errors = {}, data) {
  checkPhone(errors,data)
  checkEmail(errors,data)
  checkPassword(errors, data);
  checkPasswordComfirm(errors, data);
  checkUsername(errors, data);
  return errors;
}
export async function checkData(data) {
  const errors = checkruleData({}, data);
  return errors;
}

function checkruleData(errors = {}, data) {
  checkPhone(errors,data)
  checkAddress(errors,data)
  checkEmail(errors,data)
  return errors;
}
async function checkUsername(errors, data) {
  const usernameRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  if (data.username === "") {
    errors.data.username = toast.error("username không được để trống");
  } else if (data.username.length < 5) {
    errors.data.username = toast.error("username không được < 5 ký tự");
  } else if (data.username.length > 10) {
    errors.data.username = toast.error("username phải < 10 ký tự");
  }
  else if (usernameRegex.test(data.username)) {
    errors.data.username = toast.error("username không được chứa ký tự đặc biệt");
  } 
  else {
    errors.data.username = data.username;
  }
}

async function checkEmail(errors,data){
  const datas = await data;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (datas.email === "") {
    errors.datas.email = toast.error("email không được để trống");
  } 
  else if(emailRegex.test(datas.email)){
    errors.datas.email = toast.error("email không giống với định dạng");
  }
  else {
    errors.datas.email = datas.email;
    console.log(emailRegex.test(datas.email))

  }
}

async function checkPhone(errors,data){
  const datas = await data;

  if (datas.phone === "") {
    errors.datas.phone = toast.error("phone không được để trống");
  } 
  else {
    errors.datas.phone = datas.phone;
  }

}
async function checkPassword(errors, data) {
  const datas = await data;
  const passwordRegex = /(?=.*?[#?!@$%^&*-])/
  if (datas.password === "") {
    errors.datas.password = toast.error("password không được để trống");
  } else if(data.password.length < 10){
    errors.datas.password = toast.error("password không được < 10 ký tự");
  }
  else if(passwordRegex.test(datas.password)){
    errors.datas.password = toast.error("password phải chứa ít nhất một ký tự đặc biệt");
  }
  else {
    errors.datas.password = datas.password;
  }
}

async function checkPasswordComfirm(errors, data) {
  console.log(data)
  const datas = await data;
  if (datas.passwordconfirm === "") {
    errors.datas.passwordconfirm = toast.error("passwordconfirm không được để trống");
  } else if(data.passwordconfirm !== data.password){
    errors.datas.passwordconfirm = toast.error("password không trùng khớp");
  }
  else {
    errors.datas.passwordconfirm = datas.passwordconfirm;
  }
}

async function checkAddress(errors, data) {
  const datas = await data;

  if (datas.address === "") {
    errors.datas.address = toast.error("address không được để trống");
  } 
  else {
    errors.datas.address = datas.address;
  }

}
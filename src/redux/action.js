const GetdataProduct = (data) => {
  return {
    type: "DATAPRODUCT",
    payload: data,
  };
};
const addToCart = (data) => {
  return {
    type: "ADD_PRODUCT",
    payload: data,
  };
};
const quantity = (data) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: data,
  };
};
const removeFromCart = (data) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: data,
  };
};
const action = {
  GetdataProduct,
  addToCart,
  removeFromCart,
  quantity,
};

export default action;

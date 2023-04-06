const GetdataProduct = (data) => {
  return {
    type: "DATAPRODUCT",
    payload: data,
  };
};
const AddToCart = (data) => {
  return {
    type: "ADDTOCART",
    payload: data,
  };
};
export default { GetdataProduct, AddToCart };

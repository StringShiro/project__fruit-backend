const initState = {
  users: [{ id: 1, name: "thang" }],
  dataProduct: [],
};
const rootReducer = (state = initState, action) => {
  // console.log("chekc check", state, action);
  switch (action.type) {
    case "DATAPRODUCT":
      // console.log("check action", action.payload);
      return {
        dataProduct: [action.payload],
      };
    default:
      return state;
  }
};
export default rootReducer;

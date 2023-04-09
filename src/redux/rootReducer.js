const initState = {
  dataProduct: [],
  dataAddToCarts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DATAPRODUCT":
      return {
        ...state,
        dataProduct: [action.payload],
      };
    case "ADD_PRODUCT":
      const existingProduct = state.dataAddToCarts.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          dataAddToCarts: state.dataAddToCarts.map((product) => {
            if (product.id === existingProduct.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return product;
          }),
        };
      }
      return {
        ...state,
        dataAddToCarts: [
          ...state.dataAddToCarts,
          { ...action.payload, quantity: 1 },
        ],
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        dataAddToCarts: state.dataAddToCarts.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        dataAddToCarts: state.dataAddToCarts.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default rootReducer;

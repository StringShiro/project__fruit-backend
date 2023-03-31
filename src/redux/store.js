// import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
const composedEnhancers = composeWithDevTools();
const Store = createStore(rootReducer, composedEnhancers);
export default Store;

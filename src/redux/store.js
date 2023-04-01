// import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "dataproduct",
  storage,
};
const composedEnhancers = composeWithDevTools();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, composedEnhancers);

// export default Store;

export const persistor = persistStore(Store);
export default Store;

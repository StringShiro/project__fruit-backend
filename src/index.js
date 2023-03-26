import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./routers/Scrolltotop";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducer/rootReducer";
const reduxStore = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Provider store={reduxStore}>
        <App></App>
      </Provider>
    </Router>
  </React.StrictMode>
);

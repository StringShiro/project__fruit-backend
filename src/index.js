import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./routers/Scrolltotop";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <ScrollToTop />
        <App></App>
      </Provider>
    </Router>
  </React.StrictMode>
);

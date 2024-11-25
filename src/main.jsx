import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; 
import store from "./store.jsx"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/pages/user/i18n"; // 반드시 초기화 파일 import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

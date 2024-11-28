import React from "react";
import { Provider } from "react-redux"; 
import store from "./store.jsx"; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./utils/i18n.js"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

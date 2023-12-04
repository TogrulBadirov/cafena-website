import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BasketProvider from "./context/BasketContext.jsx";
import WishListProvider from "./context/WishListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </BasketProvider>
  </React.StrictMode>
);

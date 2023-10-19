import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ClusterContextProvider from "./context/ClusterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClusterContextProvider>
        <App />
      </ClusterContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

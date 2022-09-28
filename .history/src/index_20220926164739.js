import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
    <Navbar />
  </React.StrictMode>
);
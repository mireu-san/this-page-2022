import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Navbar from "./Navbar/Navbar";
import Main from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/this-page-2022">
    <Main />
    {/* <Navbar /> */}
  </BrowserRouter>
  // </React.StrictMode>
);

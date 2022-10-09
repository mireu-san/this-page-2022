import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Main />
    <Navbar />
  </BrowserRouter>
  // </React.StrictMode>
);

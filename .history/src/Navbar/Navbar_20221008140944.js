import React from "react";
import NightMode from "./NightMode";
import "./Navbar.css";

import Home from "../pages/Home/Home";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar_left">
        <h2>Logo</h2>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/history">History</a>
          </li>
          <li>
            <a href="/projects">Side Projects</a>
          </li>
          <li>
            <a href="https://silverlibrary.tistory.com/">Blog</a>
          </li>
        </ul>
      </div>
      <div className="main_content_right">
        <div className="header">
          <NightMode />
        </div>
        <hr></hr>

        <div className="info">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

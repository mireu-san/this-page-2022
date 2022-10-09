import React from "react";
import { Link } from "react-router-dom";

import NightMode from "./NightMode";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar_left">
        <h2>Logo</h2>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/projects">Side Projects</Link>
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
        {/* <div className="info">
          <Home />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;

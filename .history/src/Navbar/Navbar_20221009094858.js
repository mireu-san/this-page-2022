import React from "react";
import { NavLink } from "react-router-dom";
// import Home from "../pages/Home/Home";

import NightMode from "./NightMode";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar_left">
          <NavLink to="/">
            <h2>Logo</h2>
          </NavLink>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Side Projects</NavLink>
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
    </>
  );
}

export default Navbar;

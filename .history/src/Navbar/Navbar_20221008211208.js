import React from "react";
import Home from "../pages/Home/Home";
// import Experience from "../pages/Experience/Experience";
// import Projects from "../pages/Projects/Projects";
// import History from "../pages/History/History";

import { BorwserRouter as Link } from "react-Linkr-dom";
import NightMode from "./NightMode";
import "./Navbar.css";
import { BrowserRouter } from "react-router-dom";

function Navbar() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="sidebar_left">
          <h2>Logo</h2>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
          </nav>
          <hr />
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
      </BrowserRouter>
    </div>
  );
}

export default Navbar;

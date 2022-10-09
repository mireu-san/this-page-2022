import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import Link from "react-router-dom";
import NightMode from "./NightMode";
import "./Navbar.css";

function Navbar() {
  return (
    <Router>
      <div className="wrapper">
        <div className="sidebar_left">
          <h2>Logo</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/history">History</Link>
            </li>
            <li>
              <Link href="/projects">Side Projects</Link>
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
    </Router>
  );
}

export default Navbar;

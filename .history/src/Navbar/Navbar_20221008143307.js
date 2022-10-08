import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
              <Route href="/">Home</Route>
            </li>
            <li>
              <Route to="/experience">Experience</Route>
            </li>
            <li>
              <Route href="/history">History</Route>
            </li>
            <li>
              <Route href="/projects">Side Projects</Route>
            </li>
            <li>
              <Route href="https://silverlibrary.tistory.com/">Blog</Route>
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

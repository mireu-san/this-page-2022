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
              <Route path="/" component={Home}>Home</a>
            </li>
            <li>
              <Route path="/experience" component={Experience}>Experience</a>
            </li>
            <li>
              <Route path="/history" component={History}>History</a>
            </li>
            <li>
              <Route path="/projects" component={Side Projects}>Side Projects</a>
            </li>
            <li>
              <Route path="https://silverlibrary.tistory.com/" component={Blog}>Blog</a>
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

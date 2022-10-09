import React from "react";
import Home from "../pages/Home/Home";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import History from "../pages/History/History";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Experience">Experience</Link>
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
          <hr />
          {/* <Route path="/" component={Home} exact={true} />
          <Route path="/experience" component={Experience} exact={true} />
          <Route path="/history" component={History} exact={true} />
          <Route path="/projects" component={Projects} exact={true} /> */}
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

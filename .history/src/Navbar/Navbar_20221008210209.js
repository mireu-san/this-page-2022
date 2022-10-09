import React from "react";
import Home from "../pages/Home/Home";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import History from "../pages/History/History";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NightMode from "./NightMode";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar_left">
        <h2>Logo</h2>
        <ul>
          <li>
            <Route to="/">Home</Route>
          </li>
          <li>
            <Route to="/experience">{Experience}Experience</Route>
          </li>
          <li>
            <Route to="/history">{History}History</Route>
          </li>
          <li>
            <Route to="/projects">{Projects}Side Projects</Route>
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
  );
}

export default Navbar;

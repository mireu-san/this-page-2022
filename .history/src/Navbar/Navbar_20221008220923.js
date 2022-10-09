import React from "react";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Experience from "../pages/Experience/Experience";
import History from "../pages/History/History";
import Projects from "../pages/Projects/Projects";

import NightMode from "./NightMode";
import "./Navbar.css";

function Navbar() {
  return (
    <Routes>
      <div className="wrapper">
        <div className="sidebar_left">
          <h2>Logo</h2>
          <ul>
            <li>
              <Route path="/" element={<Home />}>
                Home
              </Route>
            </li>
            <li>
              <Route path="/experience" element={<Experience />}>
                Experience
              </Route>
            </li>
            <li>
              <Route path="/history" element={<History />}>
                History
              </Route>
            </li>
            <li>
              <Route path="/projects" element={<Projects />}>
                Side Projects
              </Route>
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
    </Routes>
  );
}

export default Navbar;

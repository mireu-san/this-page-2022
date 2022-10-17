import React from "react";
import { Link } from "react-router-dom";
// import Home from "../pages/Home/Home";

import NightMode from "./NightMode";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { BsBookmarkStarFill, BsLinkedin } from "react-icons/bs";
import { SiFuturelearn, SiMicrodotblog } from "react-icons/si";
import { ImLab } from "react-icons/im";

function Navbar() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar_left">
          <Link to="/">
            <h2>Jongwan Kim</h2>
          </Link>
          <ul>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <BsBookmarkStarFill /> Experience
              </Link>
            </li>
            <li>
              {/* 주의: 원래 History 였음. 모든 tag, class명은 history 또는 his 임. */}
              <Link to="/education">
                <SiFuturelearn /> Education
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <ImLab /> Side Projects
              </Link>
            </li>
            <li>
              <a href="https://silverlibrary.tistory.com/">
                <SiMicrodotblog /> Blog
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/">
                <BsLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jongwan-kim-89500a194/">
                <BsLinkedin /> Github
              </a>
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

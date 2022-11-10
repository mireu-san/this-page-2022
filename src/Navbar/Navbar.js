import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

import { FaHome } from "react-icons/fa";
import { BsBookmarkStarFill, BsLinkedin } from "react-icons/bs";
import { SiFuturelearn, SiMicrodotblog } from "react-icons/si";
import { ImLab } from "react-icons/im";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // to let it close when user click mobile menu category
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        {/* toggle button for mobile */}
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="links">
        <Link to="/">
          <h2 className="logo">Jongwan Kim</h2>
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
            <a href="https://github.com/mireu-san/">
              <AiFillGithub /> Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

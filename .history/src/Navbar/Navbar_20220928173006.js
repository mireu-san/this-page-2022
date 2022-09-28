import React from "react";
import styled from "styled-components";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          <li>
            <button>
              <a href="#">Home</a>
            </button>
          </li>
          <li>
            <button>
              <a href="#">Experience</a>
            </button>
          </li>
          <li>
            <button>
              <a href="#">Education</a>
            </button>
          </li>
          <li>
            <button>
              <a href="#">Side Projects</a>
            </button>
          </li>
          <li>
            <button>
              <a href="#">Linkedin</a>
            </button>
          </li>
        </ul>
      </div>
      {/* header */}
      <div className="main_content">
        <div className="header">Welcome</div>
      </div>
    </div>
  );
}

export default Navbar;

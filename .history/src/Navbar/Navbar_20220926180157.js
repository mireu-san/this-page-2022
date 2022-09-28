import React from "react";
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
    // // Entire Body
    // <div className="wrapper">
    //   {/* Left */}
    //   <div className="NavbarLeft">
    //     <a href="#">Logo Name</a>
    //     <button className="home">Home</button>
    //     <button className="experience">Experience</button>
    //     <button className="education">Education</button>
    //     <button className="sideProjects">Side Projects</button>
    //     <button className="linkedin">Linkedin</button>
    //   </div>
    //   {/* Top */}
    //   <div className="NavbarTop">
    //     <a href="#">KO</a>
    //     <a href="#">Moon</a>
    //   </div>
    // </div>
  );
}

export default Navbar;

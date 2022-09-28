import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    // Entire Body
    <div className="wrapper">
      {/* Left */}
      <div className="NavbarLeft">
        <a href="#">Logo Name</a>
        <button className="home">Home</button>
        <button className="experience">Experience</button>
        <button className="education">Education</button>
        <button className="sideProjects">Side Projects</button>
        <button className="linkedin">Linkedin</button>
      </div>
      {/* Top */}
      <div className="NavbarTop">
        <a href="#">KO</a>
        <a href="#">Moon</a>
      </div>
    </div>
  );
}

export default Navbar;

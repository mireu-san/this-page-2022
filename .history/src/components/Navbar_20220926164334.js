import React from "react";

function Navbar() {
  return (
    // Entire Body
    <div className="GroupNavbarBody">
      {/* Left */}
      <div className="GroupNavbarLeft">
        {/* <div>Navbar</div> */}
        {/* Wrap each menu as a small menubar + glowing effect */}
        <a href="#">Logo Name</a>
        <button className="home">Home</button>
        <button className="experience">Experience</button>
        <button className="education">Education</button>
        <button className="sideProjects">Side Projects</button>
        <button className="linkedin">Linkedin</button>
      </div>
      {/* Top */}
      <div className="GroupSidebarTop">
        <a href="#">KO</a>
        <a href="#">Moon</a>
      </div>
    </div>
  );
}

export default Navbar;

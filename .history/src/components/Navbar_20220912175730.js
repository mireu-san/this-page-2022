import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbarBody">
      <div className="sidebarTop">
        <NavbarTop>
          <a className="logo">Logo Name</a>
          <a className="language">KO</a>
          <a className="visualSwitch">Moon</a>
        </NavbarTop>
      </div>
      <div className="sidebarLeft">
        <NavbarLeft>
          {/* <div>Navbar</div> */}
          {/* Wrap each menu as a small menubar + glowing effect */}
          <button className="home">Home</button>
          <button className="experience">Experience</button>
          <button className="education">Education</button>
          <button className="sideProjects">Side Projects</button>
          <button className="linkedin">Linkedin</button>
        </NavbarLeft>
      </div>
    </div>
  );
}

export default Navbar;
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const NavbarLeft = styled.div`
  margin: 0;
  padding: 0;
  width: 240px;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 1.5rem;
`;

const NavbarTop = styled.div`
  font-size: 1.5rem;
  height: 80px;

  overflow: hidden;

  a {
    float: left;
    text-align: center;
    /* need adjustment - padding */
    /* need to separate to two side - logo vs ko, moon for position */
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;

// https://styled-components.com/docs/basics
// https://www.w3schools.com/howto/howto_js_topnav.asp
// https://www.w3schools.com/howto/howto_js_vertical_tabs.asp

import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbarBody">
      <div className="GroupSidebars">
        <NavbarLeft>
          {/* <div>Navbar</div> */}
          {/* Wrap each menu as a small menubar + glowing effect */}
          <a className="logo">Logo Name</a>
          <li className="home">Home</li>
          <li className="experience">Experience</li>
          <li className="education">Education</li>
          <li className="sideProjects">Side Projects</li>
          <li className="linkedin">Linkedin</li>
        </NavbarLeft>
      </div>
      <div className="sidebarTop">
        <NavbarTop>
          <NavbarContainer>
            <a className="language">KO</a>
            <a className="visualSwitch">Moon</a>
          </NavbarContainer>
        </NavbarTop>
      </div>
    </div>
  );
}

export default Navbar;
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const NavbarLeft = styled.div`
  float: left;
  /* z-index: 100; */

  margin: 0;
  padding: 0;
  width: 240px;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  margin-top: auto;

  /* https://stackoverflow.com/questions/70563347/position-buttons-right-aligned-at-the-bottom-in-sidenavbar */
`;

const NavbarContainer = styled.div`
  float: right;
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

// final insurance - https://www.youtube.com/watch?v=At4B7A4GOPg

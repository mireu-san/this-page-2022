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
      <NavbarLeft>
        {/* <div>Navbar</div> */}
        {/* Wrap each menu as a small menubar + glowing effect */}
        <div className="home">Home</div>
        <div className="experience">Experience</div>
        <div className="education">Education</div>
        <div className="sideProjects">Side Projects</div>
        <div className="linkedin">Linkedin</div>
      </NavbarLeft>
    </div>
  );
}

export default Navbar;

const NavbarLeft = styled.div`
  margin: 0;
  padding: 0;
  width: 240px;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 1.5rem;

  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;

const NavbarTop = styled.div`
  font-size: 1.5rem;
  height: 80px;

  overflow: hidden;
`;

// https://styled-components.com/docs/basics

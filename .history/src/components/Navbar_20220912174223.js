import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbarBody">
      <div className="sidebarTop">
        <NavbarTop>
          <div className="logo">Logo Name</div>
          <div className="language">KO</div>
          <div className="visualSwitch">Moon</div>
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
`;

const NavbarTop = styled.div`
  font-size: 1.5rem;
  height: 80px;

  overflow: hidden;
`;

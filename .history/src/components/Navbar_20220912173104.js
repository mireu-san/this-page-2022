import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbarBody">
      <div className="sidebarTop">
        <NavbarTop>test</NavbarTop>
      </div>
      <NavbarLeft>
        {/* <span>Navbar</span> */}
        <span>Author 1</span>
        <span>Projects 2</span>
        <span>Wiki 3</span>
        <span>May use react-router-dom here.</span>
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
`;

const NavbarTop = styled.div`
  font-size: 1.5rem;
  height: 80px;
`;

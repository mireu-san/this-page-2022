import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbarBody">
      <div className="sidebarTop">
        <NavbarTop>test</NavbarTop>
      </div>
      <NavbarLeft>
        {/* <div>Navbar</div> */}
        <div>Author 1</div>
        <div>Projects 2</div>
        <div>Wiki 3</div>
        <div>May use react-router-dom here.</div>
        <div></div>
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

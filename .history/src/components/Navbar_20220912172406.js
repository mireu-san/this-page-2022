import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="navbarBody">
      <NavbarLeft>
        {/* <span>Navbar</span> */}
        <span>Author 1</span>
        <span>Projects 2</span>
        <span>Wiki 3</span>
        <span>May use react-router-dom here.</span>
      </StyledNavbar>
      <div className="sidebarTop">test</div>
    </div>
  );
}

export default Navbar;

const StyledNavbar = styled.span`
  font-size: 1.5rem;
  width: 240px;
`;

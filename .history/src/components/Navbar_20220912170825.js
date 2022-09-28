import React from "react";
import styled from styled-components

function Navbar() {
  return (
    <div>
      {/* <span>Navbar</span> */}
      <span>Author 1</span>
      <span>Projects 2</span>
      <span>Wiki 3</span>
      <span>May use react-router-dom here.</span>
    </div>
  );
}

styled.button`
  font-size: 1rem;
`

export default Navbar;

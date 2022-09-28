import React from "react";
import styled from "styled-components";
// import "./Navbar.css";

function Navbar() {
  return (
    <WrapperStyled>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <li>
              <button className="button-deco">
                <a href="#">Home</a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">Experience</a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">Education</a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">Side Projects</a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">Linkedin</a>
              </button>
            </li>
          </ul>
        </div>
        {/* header */}
        <div className="main_content">
          <div className="header">Welcome</div>
        </div>
      </div>
    </WrapperStyled>
  );
}

export default Navbar;

const WrapperStyled = styled.div`
  .wrapper {
    display: flex;
    position: relative;
  }

  .wrapper .sidebar {
    width: 200px;
    height: 100%;
    background: #ffffff;
    padding: 30px 0px;
    position: fixed;

    border-right-style: solid;
    border-right-color: #e2e8f0;
  }

  .button-deco {
    background-color: black;
  }
  .button-deco {
    color: white;
    font-size: 16px;
  }
`;

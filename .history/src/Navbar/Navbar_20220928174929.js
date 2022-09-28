import React from "react";
import styled from "styled-components";
// import "./Navbar.css";

function Navbar() {
  return (
    <WrapperStyled>
      <div className="wrapper">
        <div className="sidebar">
          <div className="purely-button-wrapper">
            <ul>
              <li>
                <button className="button-deco">
                  <a href="#">
                    <h3>Home</h3>
                  </a>
                </button>
              </li>
              <li>
                <button className="button-deco">
                  <a href="#">
                    <h3>Experience</h3>
                  </a>
                </button>
              </li>
              <li>
                <button className="button-deco">
                  <a href="#">
                    <h3>Education</h3>
                  </a>
                </button>
              </li>
              <li>
                <button className="button-deco">
                  <a href="#">
                    <h3>Side Projects</h3>
                  </a>
                </button>
              </li>
              <li>
                <button className="button-deco">
                  <a href="#">
                    <h3>Linkedin</h3>
                  </a>
                </button>
              </li>
            </ul>
          </div>
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
  .button-deco h3 {
    color: white;
  }
`;

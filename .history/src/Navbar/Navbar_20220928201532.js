import React from "react";
import styled from "styled-components";

// react icons
import { RiHomeSmileLine } from "react-icons/ri";
import { ImLab } from "react-icons/im";
import { GiBookshelf, GiNotebook } from "react-icons/gi";
import { BsLinkedin } from "react-icons/bs";

// import "./Navbar.css";

// const handleClickOn = (e) => {
//   console.log("test click", e);
// };

// const handleClickOff = (name, e) => {
//   console.log("test" + name, e.target);
// };

function Navbar() {
  return (
    <WrapperStyled>
      <div className="wrapper">
        <div className="sidebar">
          {/* ul act as wrapper of button */}

          <ul>
            {/* li act as wrapper of each button */}
            <li>
              <span id="logo">Jongwan Kim</span>
              <button className="button-deco">
                <a href="#">
                  <RiHomeSmileLine />
                  Home
                </a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">
                  <ImLab />
                  Experience
                </a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">
                  <GiBookshelf />
                  Education
                </a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">
                  <GiNotebook />
                  Side Projects
                </a>
              </button>
            </li>
            <li>
              <button className="button-deco">
                <a href="#">
                  <BsLinkedin />
                  Linkedin
                </a>
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
    width: 240px;
    height: 100%;
    background: #ffffff;
    padding: 30px 0px;
    position: fixed;

    border-right-style: solid;
    border-right-color: #e2e8f0;
  }

  .button-deco {
    /* background-color: black;
    color: #fff;
    font-size: 16px;
    margin: 0 30px;
    padding: 16px;
    width: 168px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 2px rgb(0, 0, 0); */
    /* background-color: #ddd; */
    border: none;
    color: black;

    text-align: center;
    font-size: 16px;

    transition: 0.3s;
    /* deco size */
    padding: 16px;
    width: 168px;
    border-radius: 5px;
    /* deco position */
    margin: 0 30px;
    background-color: white;
  }

  .button-deco:hover {
    background-color: black;
    color: white;
  }

  #logo {
    position: relative;
    border: none;
    color: black;

    text-align: center;
    font-size: 16px;
    width: 168px;
    border-radius: 10px;
    /* deco position */
    margin: 0 50px;
    padding: 16px;

    text-align: center;
    background-color: white;
  }
`;

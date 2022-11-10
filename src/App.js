import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";

import NightMode from "./Navbar/NightMode";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import "./App.css";

// NightMode (activated - home, not navbar.js)
const StyleHeader = styled.div`
  margin-left: 12px;
  margin-top: 35px;
  margin-bottom: 2rem;
  display: absolute;
`;

function App() {
  return (
    <div className="App">
      <StyleHeader>
        <div className="header">
          <NightMode />
        </div>
      </StyleHeader>
      <Navbar />
      <div id="page-wrap">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

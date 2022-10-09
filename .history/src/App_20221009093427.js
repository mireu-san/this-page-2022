import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import History from "./pages/History/History";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Navbar />} />
        <Route path="/history" element={<Navbar />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
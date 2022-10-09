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
        <Route path="/" component={<Home />} />
        <Route path="/navbar" component={<Navbar />} />
        <Route path="/experience" component={<Experience />} />
        <Route path="/history" component={<History />} />
        <Route path="/projects" component={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

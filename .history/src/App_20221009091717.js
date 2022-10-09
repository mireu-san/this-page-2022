import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;

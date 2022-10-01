import React, { useEffect, useState } from "react";
import "./NightMode.css";

// function NightMode() {
//   const [theme, setTheme] = useState("lighting");
//   const toggleTheme = () => {
//     if (theme === "lighting") {
//       setTheme("night");
//     } else {
//       setTheme("morning");
//     }
//   };

function NightMode() {
  const [theme, setTheme] = useState("lighting");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`NightMode ${theme}`}>
      <button onClick={toggleTheme ? "night" : "morning"}>Lighting</button>
    </div>
  );
}
export default NightMode;

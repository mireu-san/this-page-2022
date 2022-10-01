// import React, { useEffect, useState } from "react";
import React from "react";
import "./NightMode.css";

function NightMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

// function NightMode() {
//   const [theme, setTheme] = useState("lighting");
//   const toggleTheme = () => {
//     if (theme === "lighting") {
//       setTheme("night");
//     } else {
//       setTheme("morning");
//     }
//   };

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <div className={`NightMode ${theme}`}>
//       <button onClick={toggleTheme}>Lighting</button>
//     </div>
//   );
// }
export default NightMode;

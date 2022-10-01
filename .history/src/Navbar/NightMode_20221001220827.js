import React, { useState, useEffect } from "react";
import "./NightMode.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, world!</h1>
    </div>
  );
}
export default App;

// import React, { useEffect, useState } from "react";
// import "./NightMode.css";

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
//     localStorage.setItem("theme", theme);
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <div className={`NightMode ${theme}`}>
//       <button onClick={toggleTheme}>Lighting</button>
//     </div>
//   );
// }
// export default NightMode;

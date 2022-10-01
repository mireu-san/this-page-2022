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
  const [theme, setTheme] = useState(lighting);

  React.useEffect(() => {
    setTheme(lighting?.value ? morning : night);
  }, [theme]);

  return (
    <div className={`NightMode ${theme}`}>
      <button onClick={toggleTheme}>Lighting</button>
    </div>
  );
}
export default NightMode;

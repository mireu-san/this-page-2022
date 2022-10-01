import React, { useEffect, useState } from "react";
import "./NightMode.css";

const NightMode = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <div
      className="button"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
    </div>
  );
};

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

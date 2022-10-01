import React, { useEffect, useState } from "react";
import "./NightMode.css";

function NightMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "lighting"
  );
  const toggleTheme = () => {
    if (theme === "lighting") {
      setTheme("night");
    } else {
      setTheme("lighting");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`NightMode ${theme}`}>
      <button onClick={toggleTheme}>Lighting</button>
    </div>
  );
}
export default NightMode;

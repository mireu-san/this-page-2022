import React, { useEffect, useState } from "react";
import "./NightMode.css";

function NightMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("night");
    } else {
      setTheme("morning");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`NightMode ${theme}`}>
      <button onClick={toggleTheme}>Lighting</button>
    </div>
  );
}
export default NightMode;

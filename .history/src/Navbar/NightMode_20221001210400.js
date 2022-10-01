import React, { useState } from "react";

function NightMode() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={`NightMode ${theme}`}>
      <button onClick={toggleTheme}>Lighting</button>
    </div>
  );
}
export default NightMode;

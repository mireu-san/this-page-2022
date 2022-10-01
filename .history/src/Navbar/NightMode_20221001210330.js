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
      <button onClick={toggleTheme}>Icon for theme</button>
      <h1>Switch(Icon)</h1>
    </div>
  );
}
export default NightMode;

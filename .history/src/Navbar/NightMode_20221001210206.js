import React, { useState } from "react";

function NightMode() {
  const [theme, setTheme] = useState("light");
  return (
    <div className={`NightMode ${theme}`}>
      <h1>Switch(Icon)</h1>
    </div>
  );
}
export default NightMode;

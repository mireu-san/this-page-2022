import React, { useEffect } from "react";
import "./NightMode.css";

function App() {
  useEffect(() => {
    const bgMode = window.localStorage.getItem("bgMode");
    if (bgMode === "dark") {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
    }
  }, []);

  const darkOnOff = () => {
    if (
      document.getElementsByTagName("html")[0].classList.contains("ui-dark")
    ) {
      document.getElementsByTagName("html")[0].classList.remove("ui-dark");
      window.localStorage.setItem("bgMode", "light");
    } else {
      document.getElementsByTagName("html")[0].classList.add("ui-dark");
      window.localStorage.setItem("bgMode", "dark");
    }
  };

  return <div className="background">dark mode</div>;
}

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
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <div className={`NightMode ${theme}`}>
//       <button onClick={toggleTheme}>Lighting</button>
//     </div>
//   );
// }
// export default NightMode;

import React from "react";
// Note : not using Experience.css!
import CardEducation from "../../components/Card/CardEducation";

function Education() {
  return (
    <div className="edu-wrapper">
      {/* layer very back */}
      <div className="edu-content">
        <div className="edu-text">
          <CardEducation />
          <footer>test</footer>
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
}

export default Education;

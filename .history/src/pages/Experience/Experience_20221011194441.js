import React from "react";
import "./Experience.css";
import CardExperience from "../../components/Card/CardExperience";

function Experience() {
  return (
    <div className="exp-wrapper">
      {/* layer very back */}
      <div className="exp-content">
        <div className="exp-text">
          test
          <CardExperience />
          {/* <hr /> */}
        </div>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import "./Experience.css";
import CardExperience from "../../components/Card/CardExperience";
import Transitions from "../../components/Transitions";

function Experience() {
  return (
    <>
      <Transitions>
        <div className="exp-wrapper">
          {/* layer very back */}
          <div className="exp-content">
            <div className="exp-text">
              <CardExperience />
              <hr />
            </div>
          </div>
        </div>
      </Transitions>
    </>
  );
}

export default Experience;

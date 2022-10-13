import React from "react";
// Note : status : not using Experience.css! Using CardExperience.css.
import "./Education.css";
import CardEducation from "../../components/Card/CardEducation";
import Transitions from "../../components/Transitions";

function Education() {
  return (
    <>
      <Transitions>
        <div className="edu-wrapper">
          {/* layer very back */}
          <div className="edu-content">
            <div className="edu-text">
              <CardEducation />
              {/* <footer>test</footer> */}
              <hr />
            </div>
          </div>
        </div>
      </Transitions>
    </>
  );
}

export default Education;

import React from "react";
import "./Projects.css";
import CardProjects from "../../components/Card/CardProjects";
import Transitions from "../../components/Transitions";

function Projects() {
  return (
    <>
      <Transitions>
        <div className="project-wrapper">
          {/* layer very back */}
          <div className="project-content">
            <div className="project-text">
              <CardProjects />
              {/* <footer>test</footer> */}
              <hr />
            </div>
          </div>
        </div>
      </Transitions>
    </>
  );
}

export default Projects;

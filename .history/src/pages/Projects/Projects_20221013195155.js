import React from "react";
import "./Projects.css";
import CardProjects from "../../components/Card/CardProjects";

function Projects() {
  return (
    <>
      <div className="project-wrapper">
        {/* layer very back */}
        <div className="project-content">
          <div className="project-text">
            <CardProjects />
            <footer>test</footer>
            <hr />
          </div>
        </div>
      </div>
    </>

    // <div>
    //   <span>Projects</span>
    //   <span>Present latest good one or two only. No need to be too messy.</span>
    //   <span>
    //     List the lists of projects I have done as text and url for its repo link
    //     instead.
    //   </span>
    // </div>
  );
}

export default Projects;

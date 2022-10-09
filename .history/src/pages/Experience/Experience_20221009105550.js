import React from "react";

function Experience() {
  return (
    <div className="home-wrapper">
      {/* layer very back */}
      <div className="home-content">
        <div className="home-text">
          {/* profile picture, box */}
          <img className="profile" src={require("../../images/me-photo.jpg")} />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Experience;

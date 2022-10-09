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
          {/* {insert pdf here to let it display} */}
          == test only == <strong>Do Not USE bottom pdf</strong> unless this
          message is removed!
          <Document file={samplePDF}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default Experience;

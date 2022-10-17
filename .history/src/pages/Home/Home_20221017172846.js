import React from "react";
import "./Home.css";

// pdf
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import HomePDF from "../../pdf/resume.pdf";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        {/* layer very back */}
        <div className="home-content">
          <div className="home-text">
            {/* profile picture, box */}
            <img
              className="profile"
              src={require("../../images/me-photo.jpg")}
            />
            <hr />
            {/* {insert pdf here to let it display} */}
            {/* == test only == <strong>Do Not USE bottom pdf</strong> unless this
            message is removed! */}
            <Document file={HomePDF}>
              <Page pageNumber={1} />
            </Document>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Home;

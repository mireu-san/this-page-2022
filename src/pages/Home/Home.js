import React from "react";
import "./Home.css";

// pdf
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

import HomePDF from "../../pdf/resume.pdf";

// const styles = StyleSheet.create({
//   section: {
//     width: 200,
//     "@media max-width: 400": {
//       width: 300,
//     },
//     "@media orientation: landscape": {
//       width: 400,
//     },
//   },
// });

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
            {/* pdf */}
            <div className="pdf">
              <Document file={HomePDF}>
                <Page scale={1.5} pageNumber={1} />
                {/* <Page size="A4" style={styles.page} /> */}
              </Document>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

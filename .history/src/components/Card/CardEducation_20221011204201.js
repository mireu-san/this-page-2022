import React from "react";
import "./CardEducation.css";

function CardEducation() {
  return (
    <>
      {/* Chingu - collaboration work */}
      <section className="container-card">
        <div className="card">
          <div className="card-image img-1"></div>
          <h2>Collaboration Work in remote</h2>
          <h3>Chingu - Globe</h3>
          {/* <p>Text</p> */}
          <div className="li-wrapper">
            <li>- test</li>
            <li>- test</li>
          </div>
        </div>
        {/* Teampl100 - frontend developer */}
        <div className="card">
          <div className="card-image img-2"></div>
          <h2>Frontend Developer</h2>
          <h3>Teampl100</h3>
          <div className="li-wrapper">
            <li>- test</li>
            <li>- test</li>
          </div>
        </div>
        {/* Aviation - accounting */}
        <div className="card">
          <div className="card-image img-3"></div>
          <h2>Accountant</h2>
          <h3>ROK Aviation Forces</h3>
          <div className="li-wrapper">
            <li>- Served for 2 years</li>
            <li>- 2017 - 2019</li>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardEducation;

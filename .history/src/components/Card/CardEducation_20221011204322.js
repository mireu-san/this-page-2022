import React from "react";
import "./CardEducation.css";

function CardEducation() {
  return (
    <>
      {/* Self taught experience since July 2020 to present */}
      <section className="container-card">
        <div className="card">
          <div className="card-image img-1"></div>
          <h2>Self taught experience since July 2020 to present</h2>
          <h3>test</h3>
          {/* <p>Text</p> */}
          <div className="li-wrapper">
            <li>- test</li>
            <li>- test</li>
          </div>
        </div>
        {/* University */}
        <div className="card">
          <div className="card-image img-2"></div>
          <h2>University</h2>
          <h3>test</h3>
          <div className="li-wrapper">
            <li>- test</li>
            <li>- test</li>
          </div>
        </div>
        {/* Senior */}
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

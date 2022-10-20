import React from "react";
import "./CardEducation.css";

function CardEducation() {
  return (
    <>
      {/* Self taught experience since July 2020 to present */}
      <section className="container-card-edu">
        <div className="card-edu">
          <div className="card-image-edu eduImg-1"></div>
          <h2>Self-learning</h2>
          <p>July 2020 to present</p>
          {/* <p>Text</p> */}
          <div className="li-wrapper-edu">
            <li>Python 으로 시작해서, JavaScript 로 진행중.</li>
            <li>
              온라인 및 서적을 활용. freecodecamp, udemy, stackoverflow,
              youtube, reddit, quora, 그리고 각 스택별 제공하는 공식문서 및,
              Frontend roadmap을 기점으로 진행 중.
            </li>
            <li>
              자료 구조와 OOP를 중심, 그리고 CS50 강의를 토대로 CS지식을 보완
              중.
            </li>
          </div>
        </div>
        {/* University */}
        <div className="card-edu">
          <div className="card-image-edu eduImg-2"></div>
          <h2>Queensland University of Technology</h2>
          <h3>Economics - Bachelor degree</h3>
          <div className="li-wrapper-edu">
            <li>Graduated in July 2017</li>
            <li>Lived in commonwealth nation for a decade.</li>
            <li>Can understand and use English, Japanese(verbal), Korean.</li>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardEducation;

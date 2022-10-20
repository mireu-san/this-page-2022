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
            <li>Python 으로 시작해서, JavaScript 로 진행 중.</li>
            <li>
              온라인 및 서적을 활용. freecodecamp 에서 udemy, stackoverflow,
              youtube, reddit, 그리고 각 라이브러리 별 커뮤니티와 Frontend
              roadmap을 따라서 진행 중.
            </li>
            <li>React.js 위주의 코드 구성을 집중적으로 진행 해 왔습니다.</li>
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

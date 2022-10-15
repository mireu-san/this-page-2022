import React from "react";
import "./CardEducation.css";

function CardEducation() {
  return (
    <>
      {/* Self taught experience since July 2020 to present */}
      <section className="container-card-edu">
        <div className="card-edu">
          <div className="card-image-edu img-1"></div>
          <h2>Self-learning</h2>
          <h3>July 2020 to present</h3>
          {/* <p>Text</p> */}
          <div className="li-wrapper-edu">
            <li>- Start with Python, and tried Django with CSS</li>
            <li>- Learnt and settled on JavaScript, react and TypeScript</li>
            <li>
              - 개념과 지식 습득 경로는 freecodecamp 에서 udemy, stackoverflow,
              youtube, reddit, 그리고 각 라이브러리 별 커뮤니티와 Frontend
              roadmap을 따라서 진행 중.
            </li>
            <li>- React.js 위주의 코드 구성을 집중적으로 진행 해 왔습니다.</li>
          </div>
        </div>
        {/* University */}
        <div className="card-edu">
          <div className="card-image-edu img-2"></div>
          <h2>Queensland University of Technology</h2>
          <h3>Graduated July 2017</h3>
          <div className="li-wrapper-edu">
            <li>- Graduated in July 2017</li>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardEducation;

import React from "react";

function CardProjects() {
  return (
    <>
      {/* Present any Representative Work - 최근거 위주, 설명 가능한 것 위주 */}
      {/* 후보 1: 지금 이 페이지 */}
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
        {/* 후보 2: Anime API 페이지 - 정말 급하면 진행중인 과정을 업데이트 해두기 */}
        {/* 후보 3: 인턴쉽 때 했던 시간 math method 를 응용한 JS 구성 */}
      </section>
    </>
  );
}

export default CardProjects;

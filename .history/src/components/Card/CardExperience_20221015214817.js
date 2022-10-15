import React from "react";
import "./CardExperience.css";

function CardExperience() {
  return (
    <>
      {/* Chingu - collaboration work */}
      <section className="container-card-exp">
        <div className="card-exp">
          <div className="card-image-exp img-1"></div>
          <h2>Collaboration Work in remote</h2>
          <h3>Chingu - Globe</h3>
          {/* <p>Text</p> */}
          <div className="li-wrapper-exp">
            <li>- 싱가폴 시간대에 거주중인 개발자들과 함께 단기적으로 진행.</li>
            <li>
              - 코드 구성 및 사용 할 라이브러리에 대한 계획의 중요성에 대한
              이해.
            </li>
            <li>- 간이 문서화(예: Kanban, discord) 작업.</li>
            <li>
              - 코딩 전, 프로젝트 계획 및 팀원간의 이해도 동기화를 통한 효율적인
              작업 경험에 무게.
            </li>
          </div>
        </div>
        {/* Teampl100 - frontend developer */}
        <div className="card-exp">
          <div className="card-image-exp img-2"></div>
          <h2>Frontend Developer</h2>
          <h3>Teampl100</h3>
          <div className="li-wrapper-exp">
            <li>- JS, React.js, TypeScript 를 사용</li>
            <li>
              - From React to TypeScript 변환 작업에 참여하면서, Typescript 내
              코드 구성의 전개 방식에 대한 일반적인 견해를 습득.
            </li>
            <li>
              - React.js 위에서 Modal screen 및, class state 구성을 통한 남은
              시간 기능을 구현.
            </li>
            <li>- PM과의 소통 및 지식DB, 컴포넌트 문서화 경험.</li>
          </div>
        </div>
        {/* 독학 */}
        <div className="card-exp">
          <div className="card-image-exp img-3"></div>
          <h2>독학</h2>
          <div className="li-wrapper-exp">
            <li>- Around 2 years</li>
            <li>- July 2020 ~ present</li>
            <li>
              - udemy, stackoverflow, 각 라이브러리 커뮤니티, 공식 문서, 자료
              구조, leetcode, CS50 강의 및 서적을 중심으로 개념 진행
            </li>
            <li>
              - JavaScript 내 클래스, 프로토 타입, 배열 접목을 통한 리펙토링 및
              반복되는 코드 구성의 효율성 개선에 관심.
            </li>
          </div>
        </div>
        {/* Aviation - accounting */}
        <div className="card-exp">
          <div className="card-image-exp img-3"></div>
          <h2>Accountant</h2>
          <h3>ROK Aviation Forces</h3>
          <div className="li-wrapper-exp">
            <li>- Served for 2 years</li>
            <li>- 2017 - 2019</li>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardExperience;

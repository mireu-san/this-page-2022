import React from "react";
import "./CardExperience.css";

function CardExperience() {
  return (
    <>
      {/* Caution : no entire wrapper does exist! May add it when necessary */}
      {/* Chingu - collaboration work */}
      <section className="card-wrapper">
        <section className="container-card-exp">
          {/* each card => card-exp */}
          <div className="card-exp-1">
            <div className="card-image-exp cardImg-1"></div>
            <h2>Chingu - Work Collaboration Remote Community</h2>
            <h3>04/2022 - present</h3>
            {/* <p>Text</p> */}
            <div className="li-wrapper-exp">
              <li>싱가폴 시간대에 거주중인 개발자들과 함께 단기적으로 진행.</li>
              <li>
                코드 구성 및 사용 할 라이브러리에 대한 계획의 중요성에 대한
                이해.
              </li>
              <li>
                간이 문서화(예: Kanban, discord) 를 통한 계획 및 코드
                규칙(필요시), 지식 동기화.
              </li>
              <li>
                코딩 전, 프로젝트 계획 및 팀원간의 이해도 동기화를 통한 효율적인
                작업 경험에 무게.
              </li>
            </div>
          </div>
          {/* Teampl100 - frontend developer */}
          <div className="card-exp-2">
            <div className="card-image-exp cardImg-2"></div>
            <h2>Frontend Developer - Teampl100</h2>
            <h3>07/2022 - 08/2022</h3>
            <div className="li-wrapper-exp">
              <li>JS, React.js, TypeScript -</li>
              <li>
                React 에서 TypeScript 로의 변환 작업에 기여. Typescript 내 코드
                구성의 전개 방식에 대한 이해도 증진.
              </li>
              <li>
                React.js 위에서 Modal screen 및, 상태 관리를 접목한 남은 시간
                기능을 구성.
              </li>
              <li>
                PM과의 소통을 통한 프로젝트 이해도 점검 및, 해당 조직 내 지식DB
                동기화 및 CI/CD 구성 계획에 기여. 컴포넌트 구성 기여 및 업데이트
                내역에 대한 문서화 경험.
              </li>
            </div>
          </div>
          {/* 독학 */}
          <div className="card-exp-3">
            <div className="card-image-exp cardImg-3"></div>
            <h2>Web development - 독학</h2>
            <h3>July 2020 - present</h3>
            <div className="li-wrapper-exp">
              <li>July 2020 - present</li>
              <li>
                Udemy, Stackoverflow, discord, 공식 문서, 자료 구조, leetcode,
                CS50 강의 및 서적을 중심으로 개념 진행
              </li>
              <li>
                첫 시작은 Python 및 백엔드. 이 후, Front-end JavaScript 프로젝트
                위주로 개발.
              </li>
              <li>
                JavaScript 내 클래스, 프로토 타입, 배열 접목을 통한 리펙토링 및
                반복되는 코드 구성의 효율성 개선에 관심.
              </li>
            </div>
          </div>
          {/* Aviation - accounting */}
          <div className="card-exp-4">
            <div className="card-image-exp cardImg-4"></div>
            <h2>Accountant</h2>
            <h3>ROK Aviation Forces</h3>
            <div className="li-wrapper-exp">
              <li>Served for 2 years</li>
              <li>2017 - 2019</li>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default CardExperience;

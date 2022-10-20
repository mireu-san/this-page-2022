import React from "react";
import "./CardProjects.css";
// import { AnimatePresence, motion } from "framer-motion";

function CardProjects() {
  return (
    <>
      {/* #1 */}
      <section className="container-card-project">
        <div className="card-project">
          <div className="card-image-project projectImg-1"></div>
          <h2>
            <a href="https://github.com/mireu-san/this-page-2022">This page</a>
          </h2>
          <h3>개인 페이지 (Oct 2022)</h3>

          <div className="li-wrapper-project">
            <strong>전작과의 차이점</strong>
            <li>향후 리펙토링 작업을 고려한 경로 트리 구성 설계.</li>
            <li>
              구성에 쓰일 라이브러리 및, 폴더 경로 설계 및 조사에 주요 시간
              배정.
            </li>
            <li>
              작업 도중 일어날 혼란을 최소화하고자, 최초 구성시 리팩토링을
              자제하는 등 자체적으로 규칙 설정.
            </li>
            <li>
              완성 전, 잦은 변경으로 인한 스케줄 연장 문제를 예방하고자 컴포넌트
              구성과 같은 작업 도중 리펙토링을 최소화 함.
            </li>
            <li>
              stackoverflow 및, 개발자 커뮤니티를 통한 문제 해결(예: 구성
              아이디어).
            </li>

            <p>
              🧭이전 사이드 프로젝트 열람은
              <a href="https://github.com/mireu-san" alt="Github this page url">
                <button className="project-button">이곳을 클릭해서 열람</button>
              </a>
              해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>
      {/* #2 */}
      {/* <section className="container-card-project">
        <div className="card-project">
          <div className="card-image-project projectImg-1"></div>
          <h2>
            <a href="https://github.com/mireu-san/this-page-2022">Header</a>
          </h2>
          <h3>Title</h3>
          <div className="li-wrapper-project">
            <strong>subtitle</strong>
            <li>test</li>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default CardProjects;

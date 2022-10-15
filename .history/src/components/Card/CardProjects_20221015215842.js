import React from "react";
import "./CardProjects.css";
// import { AnimatePresence, motion } from "framer-motion";

function CardProjects() {
  return (
    <>
      {/* Present any Representative Work - 최근거 위주, 설명 가능한 것 위주 */}
      {/* 후보 1: 지금 이 페이지 */}
      <section className="container-card-project">
        {/* 이런 식으로 진행 해서 끝내보기. 
        props, state 활용 리펙토링은 아직 계획을 못 세웠으니, 일단 지금은 보류. */}

        {/* <motion.div className="card"
  animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}
>
</motion.div>

<motion.h2
    animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }} >
    </motion.h2>

    <motion.h3
    animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }} >
    </motion.h3>
*/}
        <div className="card-project">
          <div className="card-image-project img-1"></div>
          <h2>This page</h2>
          <h3>개인 페이지</h3>

          <div className="li-wrapper-project">
            <strong>전작과의 차이점</strong>
            <li>- 향후 리펙토링 작업을 고려한 경로 트리 구성 설계.</li>
            <li>
              - 구성에 쓰일 라이브러리 및, 폴더 경로 설계 및 조사에 주요 시간
              배정.
            </li>
            <li>
              - 선 HTML, 후 JavaScript & React.js 의 순서로 진행{" "}
              <p>(from lower to higher level stack and language)</p>
            </li>
            <li>
              - 완성 전, 잦은 변경으로 인한 스케줄 연장 문제를 예방하고자
              컴포넌트 구성과 같은 작업 도중 리펙토링을 최소화 함.
            </li>
            <li>
              - stackoverflow 및, 개발자 커뮤니티를 통한 문제 해결(예: 구성
              아이디어).
            </li>

            <a href="https://github.com/mireu-san" alt="Github this page url">
              이전 사이드 프로젝트 열람은 여기에
            </a>
          </div>
        </div>
        {/* Only activate this line as redirecting external link to github */}
        {/* <div className="card-project">
          <div className="card-image-project img-1"></div>
          <h2>This page</h2>
          <h3>개인 페이지</h3>

          <div className="li-wrapper-project">
            <strong>전작과의 차이점</strong>
            <li>- 향후 리펙토링 작업을 고려한 경로 트리 구성 설계.</li>
            <li>
              - 구성에 쓰일 라이브러리 및, 폴더 경로 설계 및 조사에 주요 시간
              배정.
            </li>
            <li>
              - 선 HTML, 후 JavaScript & React.js 의 순서로 진행{" "}
              <p>(from lower to higher level stack and language)</p>
            </li>
            <li>
              - 완성 전, 잦은 변경으로 인한 스케줄 연장 문제를 예방하고자
              컴포넌트 구성과 같은 작업 도중 리펙토링을 최소화 함.
            </li>
            <li>
              - stackoverflow 및, 개발자 커뮤니티를 통한 문제 해결(예: 구성
              아이디어).
            </li>

            <a href="https://github.com/mireu-san" alt="Github this page url" />
          </div>
        </div> */}

        {/* 후보 3: 인턴쉽 때 했던 시간 useState 를 응용한 남은시간 출력 react 구성 */}
        {/* 후보 3 의 출처는, 그냥 지난 stackoverflow 에 질문글 올린 그 답에서 약간 설명 기미 붙이기. 단, 이해하기! */}
        {/* 후보 2: Anime API 페이지 - 정말 급하면 진행중인 과정을 업데이트 해두기 */}
        {/* 그 외: 나머지는 Github repository 로 링크 걸어두기 */}
        {/* 끝! */}
        {/* </motion.div> */}
      </section>
    </>
  );
}

export default CardProjects;

import React from "react";

// 특징:
// 일단 30분만 잡고 해보기 - 3-4개 정도로 슬라이드 형식으로 보게끔.
// google - > how to let card to slide horizontally css javascript

// 후보:
// https://stackoverflow.com/questions/47505426/html-horizontal-scrollbar-for-card-divs
// 또는 https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6
// 최후: https://www.youtube.com/watch?v=BKKcGb80MOs
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
        {/* 후보 3: 인턴쉽 때 했던 시간 useState 를 응용한 남은시간 출력 react 구성 */}
        {/* 후보 3 의 출처는, 그냥 지난 stackoverflow 에 질문글 올린 그 답에서 약간 설명 기미 붙이기. 단, 이해하기! */}
        {/* 후보 2: Anime API 페이지 - 정말 급하면 진행중인 과정을 업데이트 해두기 */}
        {/* 그 외: 나머지는 Github repository 로 링크 걸어두기 */}
        {/* 끝! */}
      </section>
    </>
  );
}

export default CardProjects;

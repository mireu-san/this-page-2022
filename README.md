<간략한 개요>
- 이전까지의 문제점: 한 페이지 내에서 작업 할 경우, 다소 난잡하게 느껴짐. 문제는 초기 작업 시, 이게 크게 느껴졌음. 
- 접근 전략 차별점: 가장 자신 있는 low skill 에서 접근.

1. 원활한 초기 작업 속도 및 이 과정에서 혼란 없는 테스트를 위하여 깔끔하게 css 부터 시작. (향후 refactoring 작업 시, styled-components 적용 예정)

Note : Framer Motion
1. App.js 에서 광역 적용중.  

<발견 된 문제점 - 해결 해야 하는 리스트>
1. 모바일 페이지 전용 (특정 사이즈 미만의 화면일 경우, 전용 페이지 간이로 표시.)


<코드 구성 규칙>
절대 완성하기 전까지, 중간에 refactoring 하지 말기.

<해결 된 문제점>
1. Navbar -> header -> toggle button 의 경우, night mode 로 클릭 전환 시, 다시 되돌아 오나, 그 이후 다시 night mode 로 가질 않음.
- 해결 방법 : 예: {setTheme ? "night" : "morning"} 과 같은 js 문법을 활용하는 방법을 한번 더 알아보기. 
2. Card Component 부분의 경우, props 사용하지 말기. (backup - 5 exp 폴더로 문제의 코드는 이동) 
사유: 목적과 달리, 관리가 더 복잡해 짐.
얻은 점: function props 와 class state 에 대한 활용의 이해 정립. 
1. 좌측 sidebar 가 본문과 responsive 하게 반응 하지 않음. 즉, 본문이 여전히 침범함.
.exp-wrapper {
    margin: 0 auto;
    /* 이거다! leftbar 침범 안하게 설정하는 법 */
    margin-left: 200px;
    height: 100%;
    display: block;
    text-align: center;
}

============
Something that can be improved:
1. Establish Routes.js file and let it perform it as indicator for each file at one place.
- Home.js can be the place to let it happen. (Create Routes.js prior to implement it on here!)

Some major things to do:
1. Use object base and establish properties with key and value. (for wiki.js)
2. may use array (for Navbar.js)

Inspired by https://www.quentinpiot.com/

For eslint setup:
https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf

Navbar
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidebar_responsive

=========
To be fixed:

1. Navbar - Left side navbar needs to be absolute. Top navbar should not invade left area.

2. Navbar - change button's style later. No need to use li tag for this time.

3. Navbar - adjust margin/padding position for left navbar

Navbar
https://www.w3schools.com/cssref/pr_border-right_color.asp
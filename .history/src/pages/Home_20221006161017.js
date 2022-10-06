import React from "react";
import "./Home.css";

// https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
// 이력은 PDF 로 출력하기. 즉, 위의 링크가 핵심이다.

function Home() {
  return (
    <div className="home-wrapper">
      layer very back
      <div className="home-content">
        <div className="home-text">
          {/* profile picture, box */}
          <img src={require("../images/me-photo.jpg")} />
          {/* {insert pdf here! to let it display!} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
{
  /* <span>Author</span>
      <span>Litearlly, everything. But starting with brief intro first.</span>
      <span>Then go deeper for reader who wants to know bit more.</span>
      <span>
        1. Why I choose to be developer? 2. Am I sustainable? (will to keep
        learning the stuff?) 3. Why I choose to do only JS base language? (to be
        specialised on it, rather than jack of all trades) 4. React targets to
        conquer UI for web client side. 5. Typescript is very reliable language
        especially when I do coding myself alone. So, personally I prefer using
        Typescript. 6. There is concern that react is not enough to grow further
        than where I am. I prefer using TS and JS for now. I have a will to
        challenge on another field, not only limiting myself to web developer,
        but as a frontend developer. 7. Finally, from the experinces I worked
        with a group, I try to plan and understand the things I would do before
        jumping on its coding task. 8. Personally, I have learnt myself by
        referring online sources like udemy and stackoverflow by asking to it.
      </span> */
}

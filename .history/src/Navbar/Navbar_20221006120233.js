import React from "react";
import NightMode from "./NightMode";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="sidebar_left">
        <h2>Jongwan Kim</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Side Projects</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="main_content_right">
        <NightMode />
        <div className="header"></div>
        <div className="info">
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
            nobis ut exercitationem atque accusamus sit natus officiis totam
            blanditiis at eum nemo, nulla et quae eius culpa eveniet
            voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
            perferendis itaque alias sint, beatae non maiores magnam ad, veniam
            tenetur atque ea exercitationem earum eveniet totam ipsam magni
            tempora aliquid ullam possimus? Tempora nobis facere porro,
            praesentium magnam provident accusamus temporibus! Repellendus harum
            veritatis itaque molestias repudiandae ea corporis maiores non
            obcaecati libero, unde ipsum consequuntur aut consectetur culpa
            magni omnis vero odio suscipit vitae dolor quod dignissimos
            perferendis eos? Consequuntur!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
            nobis ut exercitationem atque accusamus sit natus officiis totam
            blanditiis at eum nemo, nulla et quae eius culpa eveniet
            voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
            perferendis itaque alias sint, beatae non maiores magnam ad, veniam
            tenetur atque ea exercitationem earum eveniet totam ipsam magni
            tempora aliquid ullam possimus? Tempora nobis facere porro,
            praesentium magnam provident accusamus temporibus! Repellendus harum
            veritatis itaque molestias repudiandae ea corporis maiores non
            obcaecati libero, unde ipsum consequuntur aut consectetur culpa
            magni omnis vero odio suscipit vitae dolor quod dignissimos
            perferendis eos? Consequuntur!
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
            nobis ut exercitationem atque accusamus sit natus officiis totam
            blanditiis at eum nemo, nulla et quae eius culpa eveniet
            voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
            perferendis itaque alias sint, beatae non maiores magnam ad, veniam
            tenetur atque ea exercitationem earum eveniet totam ipsam magni
            tempora aliquid ullam possimus? Tempora nobis facere porro,
            praesentium magnam provident accusamus temporibus! Repellendus harum
            veritatis itaque molestias repudiandae ea corporis maiores non
            obcaecati libero, unde ipsum consequuntur aut consectetur culpa
            magni omnis vero odio suscipit vitae dolor quod dignissimos
            perferendis eos? Consequuntur!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

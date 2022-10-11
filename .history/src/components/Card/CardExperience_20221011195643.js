import React from "react";
import "./CardExperience.css";

function CardExperience() {
  return (
    <>
      <section className="container">
        <div className="card">
          <div className="card-image"></div>
          <h2>Title</h2>
          <p>Text</p>
        </div>
      </section>
    </>
  );
}

// function Card(props) {
//   return (
//     <div className="card">
//       <div className="card-body">
//         {/* <img className="card-image" src={props.img} /> */}
//         <h2 className="card-title">{props.title}</h2>
//         <h3 className="card-firm">{props.firm}</h3>
//         <p className="card-time">{props.time}</p>
//         <p className="card-desc">{props.desc}</p>
//         <p className="card-stack">{props.stack}</p>
//       </div>
//     </div>
//   );
// }

export default CardExperience;

import React from "react";
import "./CardExperience.css";

function CardExperience() {
  return (
    <div className="wrapper-card">
      <Card
        title="Frontend Developer"
        firm="Teampl100"
        time="2 months internship"
        desc="Description"
        stack="Main stacks"
        // img="https://cdn.pixabay.com/photo/2020/10/23/14/54/woman-5678995_1280.jpg"
      />
      <Card title="Collaboration Work in remote" firm="Chingu" />
      <Card
        title="Mandatory Military Service - Accounting"
        firm="ROK Aviation Forces"
        desc="2 years full-time"
      />
      {/* <Card title="Title3" text="Text here3" /> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        {/* <img className="card-image" src={props.img} /> */}
        <h2 className="card-title">{props.title}</h2>
        test
        <h3 className="card-firm">{props.firm}</h3>
        <p className="card-time">{props.time}</p>
        <p className="card-desc">{props.desc}</p>
        <p className="card-stack">{props.stack}</p>
      </div>
    </div>
  );
}

export default CardExperience;

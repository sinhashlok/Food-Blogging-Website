import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={props.style}>
      <img src={props.img} alt="food" className="card-img" />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-text">{props.text}</p>
      <button className="card-btn">Read More</button>
    </div>
  );
}

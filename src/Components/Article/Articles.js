import React, { useState } from "react";
import data from "../../data";
import Card from "./Card";

export default function Article() {
  const [arrow, setArrow] = useState(1);

  function handleClick() {
    setArrow((prevArrow) => {
      return prevArrow === 1 ? 2 : 1;
    });
  }

  return (
    <div className="article">
      <h1 className="article-heading">Latest Article</h1>
      <div className="card-box">
        {data.map((data) => (
          <Card
            key={data.id}
            style={{ display: data.page === arrow ? "block" : "none" }}
            className="first-card"
            img={`./images/article-img/${data.img}`}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>

      {/* To change the cards */}
      <div className="arrow-box">
        <img
          src={`./images/arrow/${
            arrow === 1 ? `left-active` : `left-inactive`
          }.svg`}
          alt="left-arrow"
          className="arrow"
          onClick={arrow === 2 && handleClick}
        />

        <p className="arrow-text">{arrow} / 2</p>

        <img
          src={`./images/arrow/${
            arrow === 1 ? `right-active` : `right-inactive`
          }.svg`}
          alt="right-arrow"
          className="arrow"
          onClick={arrow === 1 && handleClick}
        />
      </div>
    </div>
  );
}

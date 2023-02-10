import React from "react";

export default function Hero() {
  return (
    <div className="hero-box">
      <div className="hero-content">
        <h1 className="hero-text">
          Discover the{" "}
          <span style={{ color: "rgba(226, 55, 68, 1)" }}>Best</span> Food and
          Drinks
        </h1>
        <p className="hero-byline">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="explore-btn">Explore Now!</button>
      </div>
      <img
        src="./images/Pizza-hero.jpg"
        alt="hero-img"
        className="pizza-hero"
      />
      <img
        src="./images/Hero-Vector.png"
        alt="vector"
        className="hero-vector"
      />
    </div>
  );
}

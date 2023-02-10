import React from "react";

export default function About() {
  return (
    <div className="about-us">
      <img
        className="about-img"
        src="./images/pharmasict-serving-customer-drug-store.png"
        alt="aboutus-img"
      />
      <div className="about-content">
        <h1 className="about-header">About us</h1>
        <p className="about-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="about-btn"> Read More </button>
      </div>
    </div>
  );
}

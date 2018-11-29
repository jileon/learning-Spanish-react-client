import React from "react";
import "./css/intro.css";
export default function Intro(props) {
  return (
    <React.Fragment>
      <div id="home" />
      <section className="page-container">
        <div className="learn-spanish-img">
          <img src={require("./images/Learn-Spanish.png")} alt="houses" />
        </div>
        <section className="intro-text">
          <h2>Welcome to Learning Spanish</h2>
          <p>
            Are you ready to start your adventure of learning a language more than 400 million people speak? You have come to the right place.
          </p>
        </section>
      </section>
    </React.Fragment>
  );
}
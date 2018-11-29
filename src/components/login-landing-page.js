import React from "react";
import LoginForm from "./login-form";

export default function LoginPage(props) {
  return (
    <React.Fragment>
      <div id="login" />
      <section className="page-container user-page login-user">
        <section className="user-area no-show">
          {/* <h3>Placeholder</h3> */}
          <img
            className="login-img"
            alt="login"
            src={require("./images/landing-people.png")}
          />
        </section>
        <section className="user-area">
          <LoginForm />
        </section>
      </section>
    </React.Fragment>
  );
}

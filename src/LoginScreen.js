import React from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
        />

        <button className="loginScreen__button">Sign In</button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        <SignupScreen />
      </div>
    </div>
  );
}

export default LoginScreen;

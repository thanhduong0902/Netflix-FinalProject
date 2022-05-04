import React, { useEffect, useContext, useNavigate, useState } from "react";
import { LoginContext } from "./context/AuthContext";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  //  const navigate = useNavigate();
  const {login, setLogin, user, setUser } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    localStorage.setItem("login", user);
    //  navigate("/");
  };

  //  useEffect(() => {
  //    if (login === true) {
  //      navigate('/')
  //    } else {
  //      navigate("/auth/login" || "/auth/register");
  //    }
  //  }, [login, navigate]);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
        />

        <button
          // onClick={() => {
          //   setSignIn(true);
          // }}
          className="loginScreen__button"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        <SignupScreen />
      </div>
    </div>
  );
}

export default LoginScreen;

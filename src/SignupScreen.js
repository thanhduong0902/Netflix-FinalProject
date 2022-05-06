import React, { useContext, useState, useRef } from "react";
import "./SignupScreen.css";
import { LoginContext } from "./context/AuthContext";
import { signup, signin } from "./firebase";

function SignupScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);
  const { setLogin } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      setLogin(true);
      localStorage.setItem("user", email);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await signin(emailRef.current.value, passwordRef.current.value);
      setLogin(true);
      localStorage.setItem("user", email);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value.trim());
          }}
          required
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value.trim());
          }}
          required
        />

        <button disabled={loading} type="submit" onClick={handleLogin}>Sign In</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span disabled={loading} className="signupScreen__link" onClick={handleSignup}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;

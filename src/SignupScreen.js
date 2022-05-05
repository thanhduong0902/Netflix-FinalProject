import React, { useContext, useState } from "react";
import "./SignupScreen.css";
import { LoginContext } from "./context/AuthContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function SignupScreen() {
  const { setLogin } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      setLogin(true);
      localStorage.setItem("user", email);
    } else {
      // <Stack sx={{ width: "100%" }} spacing={2}>
      //   <Alert variant="filled" severity="error">
      //     This is an error alert — check it out!
      //   </Alert>
      // </Stack>;
      <h1>Helo</h1>
    }
  };

  return (
    <div className="signupScreen">
      {email === "" && password === "" ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="error">
            This is an error alert — check it out!
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value.trim());
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value.trim());
          }}
          required
        />

        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={signIn}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;

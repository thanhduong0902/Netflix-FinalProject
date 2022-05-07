import React, { useContext } from "react";
import HomeScreen from "./HomeScreen";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./page/Movies";
import TvSeries from "./page/TvSeries";
import Nav from "./Nav";
import { LoginContext } from "./context/AuthContext";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

function App() {
  const { login, check } = useContext(LoginContext);

  return (
    <div className="app">
      {login === true ? (
        <header>
          <Nav></Nav>
        </header>
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path='/'
          element={login === true ? <HomeScreen /> : <LoginScreen />}
        ></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/TvSeries" element={<TvSeries />}></Route>
        <Route path="/auth" element={check === false ? <LoginScreen /> : <SignupScreen/>} />
      </Routes>
    </div>
  );
}

export default App;

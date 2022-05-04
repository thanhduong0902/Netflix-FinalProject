import React, { useContext, useState } from "react";
import HomeScreen from "./HomeScreen";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Movies from "./page/Movies";
import TvSeries from "./page/TvSeries";
import Nav from "./Nav";
import { LoginContext } from "./context/AuthContext";
import LoginScreen from "./LoginScreen";

function App() {
  const { login } = useContext(LoginContext);

  return (
    <div className="app">
      <header>
        <Nav></Nav>
      </header>
      <Outlet></Outlet>
      {login === true ? (
        <>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/TvSeries" element={<TvSeries />}></Route>
          </Routes>
        </>
      ) : (
        <LoginScreen></LoginScreen>
      )}
    </div>
  );
}

export default App;

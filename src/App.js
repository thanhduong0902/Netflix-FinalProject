import React from "react";
import HomeScreen from "./HomeScreen";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Movies from "./page/Movies";
import TvSeries from "./page/TvSeries";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <header>
        <Nav></Nav>
      </header>
      <Outlet></Outlet>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/TvSeries" element={<TvSeries />}></Route>
      </Routes>
    </div>
  );
}

export default App;

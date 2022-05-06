import React, {  useEffect } from "react";
import HomeScreen from "./HomeScreen";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Movies from "./page/Movies";
import TvSeries from "./page/TvSeries";
import Nav from "./Nav";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";

function App() { 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth) {
        //logged in
  
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
      } else{
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);

  return (
    <div className="app">
      {!user? (
        <LoginScreen></LoginScreen>
      ) : (
        <>
      <header>
      <Nav></Nav>
      </header>
      <Outlet></Outlet>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/TvSeries" element={<TvSeries />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const activeClass = (params) => {
  return params.isActive ? "active-menu" : "active-menu-items";
};
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav-left">
          <NavLink to="/">
            {" "}
            <img
              className="nav__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
              alt=""
            />
          </NavLink>
          <NavLink className={activeClass} to="/Movies">
            <h2>Movies</h2>
          </NavLink>

          <NavLink className={activeClass} to="/TvSeries">
            <h2>TvSeries</h2>{" "}
          </NavLink>
        </div>
        <div>
          <img
            className="nav__avatar"
            src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXii8XVOjEhSS5FzwpdTaOrI_up-1FEkQhlOAwRDR8spO8_wys-jxD7_apK43FqGNiiEXD2r3uF971rSIva2kVA.png?r=f80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;

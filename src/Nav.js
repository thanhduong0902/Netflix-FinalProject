import React, { useEffect, useState, useContext } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import SearchMovies from "./SearchMovies";
import SearchTvSeries from "./SearchTvSeries";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { LoginContext } from "./context/AuthContext";
import {logout} from './firebase'

const activeClass = (params) => {
  return params.isActive ? "active-menu" : "active-menu-items";
};

function Nav() {
  const { setLogin } = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    try {
      await logout();
      setLogin(false);
      localStorage.removeItem("user");
    } catch (error) {
      alert(error.message);
    }
  }

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
            <h2>TvSeries</h2>
          </NavLink>
        </div>

        {window.location.pathname === "/" ? (
          <Search />
        ) : window.location.pathname === "/Movies" ? (
          <SearchMovies />
        ) : (
          <SearchTvSeries />
        )}

        <div>
          <img
            // id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="nav__avatar"
            src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXii8XVOjEhSS5FzwpdTaOrI_up-1FEkQhlOAwRDR8spO8_wys-jxD7_apK43FqGNiiEXD2r3uF971rSIva2kVA.png?r=f80"
            alt=""
          />
          <br />

          <Menu
            // id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Nav;

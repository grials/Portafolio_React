import React from "react";
import { NavLink } from "react-router-dom";
import "./StyleComponents/StyleNavegacion.scss";
import useTheme from "../Hook/useTheme";
import { useDispatch } from "react-redux";

function Navegacion() {
  const [mode, ,] = useTheme();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({
      type: "MENU_TABLE_FALSE",
    });
    dispatch({
      type: "MENU_HAMBURGER_FALSE",
    });
  }

  return (
    <nav className="Navegacion">
      <NavLink
        onClick={handleClick}
        exact
        to="/"
        className={mode === "LightTheme" ? "themeLight" : "themeDark"}
      >
        HOME
      </NavLink>
      <NavLink
        onClick={handleClick}
        to="/about"
        className={mode === "LightTheme" ? "themeLight" : "themeDark"}
      >
        about
      </NavLink>
      <NavLink
        onClick={handleClick}
        to="/resume"
        className={mode === "LightTheme" ? "themeLight" : "themeDark"}
      >
        resume
      </NavLink>
      <NavLink
        onClick={handleClick}
        to="/portafolio"
        className={mode === "LightTheme" ? "themeLight" : "themeDark"}
      >
        portafolio
      </NavLink>
      <NavLink
        onClick={handleClick}
        to="/blogs"
        className={mode === "LightTheme" ? "themeLight" : "themeDark"}
      >
        Blogs
      </NavLink>
      <NavLink
        onClick={handleClick}
        to="/contact"
        className={mode === "LightTheme" ? "themeLight" : "themeDark"}
      >
        contact
      </NavLink>
    </nav>
  );
}

export default Navegacion;

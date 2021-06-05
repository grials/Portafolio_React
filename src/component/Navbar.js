import React from "react";
import Navegacion from "./Navegacion";
import imagePerfil from "../img/pexels-cliford-mervil-2469122.jpg";
import "./StyleComponents/StyleNavbar.scss";
import useTheme from "../Hook/useTheme";
import useMobileNabvar from "../Hook/useMobileNabvar";
import useTableNavBar from "../Hook/useTableNavBar";

function Navbar() {
  const [mode, themeDark, themeLight] = useTheme();
  const [mobile, activeMobile] = useMobileNabvar();
  const [table, activeTable] = useTableNavBar();

  return (
    <div
      id={`${mobile ? "mobileNavBar" : ""}${table ? "tableNavBar" : ""}`}
      className={`Navbar ${
        mobile
          ? activeMobile
            ? "activeMenuHamburger"
            : "disabledMenuHamburger"
          : ""
      }
      ${table ? (activeTable ? "activeMenuTable" : "disabledMenuTable") : ""}
      `}
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <header>
        <figure>
          <img src={imagePerfil} alt="imagen de perfil" />
        </figure>
        <Navegacion />
      </header>
      <footer>
        <h4>@2021 Portafolio GRIALS</h4>
      </footer>
    </div>
  );
}

export default Navbar;

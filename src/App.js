import { Route, Switch as Switcher } from "react-router";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound404 from "./pages/NotFound404";
import Portafolio from "./pages/Portafolio";
import Resume from "./pages/Resume";
import LunaIcon from "@material-ui/icons/Brightness4";
import SolIcon from "@material-ui/icons/BrightnessHigh";
import Switch from "@material-ui/core/Switch";
import { useEffect, useState } from "react";
import "./StyleApp.scss";
import { useDispatch, useSelector } from "react-redux";
import MenuHamburger from "./component/MenuHamburger";
import { Sling as Hamburger } from "hamburger-react";

function App() {
  const table_750px = useSelector((state) => state.table_750px);

  const [theme, setTheme] = useState(true);
  const [table, setTable] = useState(table_750px);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        dispatch({
          type: "MOBILE_450PX_TRUE",
        });
      } else if (window.innerWidth > 350) {
        dispatch({
          type: "MOBILE_450PX_FALSE",
        });
        dispatch({
          type: "MENU_HAMBURGER_FALSE",
        });
      }
      if (window.innerWidth <= 750 && window.innerWidth > 350) {
        dispatch({
          type: "TABLE_750PX_TRUE",
        });
      } else if (window.innerWidth > 750 || window.innerWidth <= 350) {
        dispatch({
          type: "TABLE_750PX_FALSE",
        });
        dispatch({
          type: "MENU_TABLE_FALSE",
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    setTable(table_750px);
  }, [table_750px]);

  function onChangeTheme() {
    setTheme(!theme);
    if (!theme) {
      dispatch({
        type: "THEME_LIGHT",
      });
    } else {
      dispatch({
        type: "THEME_DARK",
      });
    }
  }

  return (
    <div
      className="App"
      style={{
        fontFamily: "DM Serif Display, serif",
        fontSize: "16px",
      }}
    >
      <MenuHamburger />
      {table && (
        <div className="buttonTable">
          <Hamburger
            color="#4FD1C5"
            duration={0.5}
            onToggle={(toggled) => {
              if (toggled) {
                dispatch({
                  type: "MENU_TABLE_TRUE",
                });
              } else {
                dispatch({
                  type: "MENU_TABLE_FALSE",
                });
              }
            }}
          />
        </div>
      )}
      <div className="theme">
        {theme ? <LunaIcon /> : <SolIcon />}
        <Switch checked={theme} onChange={onChangeTheme} />
      </div>
      <Navbar />
      <Switcher>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portafolio" component={Portafolio} />
        <Route exact path="/resume" component={Resume} />
        <Route path="*" component={NotFound404} />
      </Switcher>
    </div>
  );
}

export default App;

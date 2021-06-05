import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LikedinIcon from "@material-ui/icons/LinkedIn";
import "./Style/StyleHome.scss";
import Particle from "../component/Particle";
import Lines from "../component/Lines";
import useTheme from "../Hook/useTheme";

function Home() {
  const [mode, themeDark, themeLight] = useTheme();
  return (
    <div
      className="homePage"
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <div className="continerParticle">
        <Particle />
      </div>
      <Lines />
      <div className="continerContents">
        <h1>
          Hi i am <span>José Manuel Mendez Romero</span>
        </h1>
        <p>
          Programmer residing in Venezuela with vast experience in web services
          administration. I am currently in the area of ​​design, creation and
          implementation of web applications.
        </p>
        <div className="icons">
          <Link to="#" className="facebook">
            <FacebookIcon />
          </Link>
          <Link to="#" className="git">
            <GitHubIcon />
          </Link>
          <Link to="#" className="likedin">
            <LikedinIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

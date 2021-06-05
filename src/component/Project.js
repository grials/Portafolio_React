import React from "react";
import "./StyleComponents/StyleProject.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LikedinIcon from "@material-ui/icons/LinkedIn";
import useTheme from "../Hook/useTheme";

function Project({ urlGit, urlLikendin, title, description, src }) {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`project ${
        mode === "LightTheme" ? "themeLightProject" : "themeDarkProject"
      }`}
    >
      <figure>
        <div className="continerIcons">
          <a href={urlGit} className="git" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            href={urlLikendin}
            rel="noreferrer"
            className="likedin"
            target="_blank"
          >
            <LikedinIcon />
          </a>
        </div>
        <img src={src} alt="project" />
      </figure>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default Project;

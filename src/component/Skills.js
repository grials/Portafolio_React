import React from "react";
import "./StyleComponents/StyleSkills.scss";
import useTheme from "../Hook/useTheme";

function Skills({ src, alt, message }) {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`skills ${
        mode === "LightTheme" ? "themeLightSkill" : "themeDarkSkill"
      }`}
    >
      <img src={src} alt={alt} />
      <p>{message}</p>
    </div>
  );
}

export default Skills;

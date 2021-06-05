import React from "react";
import "./style/StyleService.scss";
import useTheme from "../../Hook/useTheme";

function Service({ title, src }) {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`service ${
        mode === "LightTheme" ? "themeLightService" : "themeDarkService"
      }`}
    >
      <img src={src} alt="Skill" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at
        voluptates optio iure provident neque!
      </p>
    </div>
  );
}

export default Service;

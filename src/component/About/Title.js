import React from "react";
import "./style/StyleTitle.scss";
import useTheme from "../../Hook/useTheme";

function Title({ title, span }) {
  const [mode, ,] = useTheme();
  return (
    <h2
      className={`title ${mode === "LightTheme" ? "themeLight" : "themeDark"}`}
    >
      {title}
      <b>
        <span>{span}</span>
      </b>
    </h2>
  );
}

export default Title;

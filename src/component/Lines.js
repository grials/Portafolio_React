import React from "react";
import "./StyleComponents/StyleLines.scss";
import useTheme from "../Hook/useTheme";

const themeLight = {
  color: "#000",
  borderColor: "#cbced8",
  backgroundColor: "#a4acc4",
};
const themeDark = {
  color: "#FFF",
  borderColor: "#2e344e",
  backgroundColor: "#2e344e",
};

function Lines() {
  const [mode, ,] = useTheme();
  return (
    <div className="continerLines">
      <div
        className="line"
        style={mode === "LightTheme" ? themeLight : themeDark}
      ></div>
      <div
        className="line"
        style={mode === "LightTheme" ? themeLight : themeDark}
      ></div>
      <div
        className="line"
        style={mode === "LightTheme" ? themeLight : themeDark}
      ></div>
      <div
        className="line"
        style={mode === "LightTheme" ? themeLight : themeDark}
      ></div>
    </div>
  );
}

export default Lines;

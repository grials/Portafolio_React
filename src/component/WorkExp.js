import React from "react";
import Header from "./Header";
import "./StyleComponents/StyleWorkExp.scss";
import useTheme from "../Hook/useTheme";

function WorkExp({ title, ocupacion, time, tasks }) {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`workExp ${
        mode === "LightTheme" ? "themeLightWorkExp" : "themeDarkWorkExp"
      }`}
    >
      <Header title={title} ocupacion={ocupacion} time={time} />
      <div className="tasks">
        <h3>Completed Tasks:</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkExp;

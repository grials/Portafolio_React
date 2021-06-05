import React from "react";
import "./Style/StylePortafolio.scss";
import Lines from "../component/Lines";
import Section from "../component/Section";
import Projects from "../component/Projects";
import useTheme from "../Hook/useTheme";

function Portafolio() {
  const [mode, themeDark, themeLight] = useTheme();
  return (
    <div
      className="portafolio"
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <Lines />
      <Section title="portfolio" span="portfolio">
        <Projects />
      </Section>
    </div>
  );
}

export default Portafolio;

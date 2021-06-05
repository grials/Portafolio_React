import React from "react";
import Card from "../component/About/Card";
import Section from "../component/Section";
import Services from "../component/About/Services";
import Lines from "../component/Lines";
import "./Style/StyleAbout.scss";
import ReactLogo from "../img/reactjs-icon.svg";
import NodeJsLogo from "../img/nodejs-seeklogo.com.svg";
import MongoDbLogo from "../img/mongodb.svg";
import Review from "../component/About/Review";
import compañia1 from "../img/pexels-pixabay-162031.jpg";
import compañia2 from "../img/pexels-mihai-vlasceanu-1400249.jpg";
import compañia3 from "../img/pexels-berk-ozdemir-3779828.jpg";
import useTheme from "../Hook/useTheme";

const reviewsObject = [
  {
    id: 1,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eum libero ratione explicabo. Optio, provident.",
    compañia: compañia1,
  },
  {
    id: 2,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eum libero ratione explicabo. Optio, provident.",
    compañia: compañia2,
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eum libero ratione explicabo. Optio, provident.",
    compañia: compañia3,
  },
];

function About() {
  const [mode, themeDark, themeLight] = useTheme();
  return (
    <div
      className="about"
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <Lines />
      <Section title={"about me"} span={"about me"}>
        <Card />
      </Section>
      <Section title={"Services"} span={"services"}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Services title={"React"} src={ReactLogo} />
          <Services title={"NodeJs"} src={NodeJsLogo} />
          <Services title={"MongoDB"} src={MongoDbLogo} />
        </div>
      </Section>
      <Section title={"reviews"} span={"reviews"}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {reviewsObject.map((elm) => (
            <Review message={elm.message} src={elm.compañia} key={elm.id} />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default About;

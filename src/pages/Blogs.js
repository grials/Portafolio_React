import React from "react";
import "./Style/StyleBlogs.scss";
import Blog from "../component/Blog";
import Web from "../img/dual-screen-1745705.svg";
import POO from "../img/cafe-151346.svg";
import Proyect from "../img/calendar-5620795.svg";
import CleanCode from "../img/programmer-1653351.svg";
import RutaApren from "../img/graphic-1552416_640.png";
import Lines from "../component/Lines";
import useTheme from "../Hook/useTheme";

const blogObject = [
  {
    id: 1,
    tittle: "Principles of object-oriented programming with Java",
    atl: "POO",
    src: POO,
  },
  {
    id: 2,
    tittle: "Responsive design for better SEO",
    alt: "SEO",
    src: Web,
  },
  {
    id: 3,
    tittle: "Rules for better project performance",
    alt: "Design Proyect",
    src: Proyect,
  },
  {
    id: 4,
    tittle: "Clean code with css",
    alt: "Clean Code",
    src: CleanCode,
  },
  {
    id: 5,
    tittle: "Web learning path with PHP",
    alt: "Web Learning",
    src: RutaApren,
  },
];

function Blogs() {
  const [mode, themeDark, themeLight] = useTheme();
  return (
    <div
      className={"blogs"}
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <Lines />
      {blogObject.map((elem) => (
        <Blog
          tittle={elem.tittle}
          src={elem.src}
          alt={elem.alt}
          key={elem.id}
        />
      ))}
    </div>
  );
}

export default Blogs;

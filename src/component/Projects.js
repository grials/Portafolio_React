import React, { useEffect, useState } from "react";
import Buttom from "./Buttom";
import Project from "./Project";
import "./StyleComponents/StyleProjects.scss";
import imgProject1 from "../img/projects/portafolio.png";

const objectCategory = [
  "All",
  "JavaScript",
  "React",
  "Node",
  "Sass",
  "MongoDb",
  "Java",
  "PHP",
  "MySql",
];

const objectProjects = [
  {
    title: "Clone Netflix",
    descripticion:
      "Project based on the Netflix user interface, technologies such as React, Redux, NodeJs, among others, were used.",
    categorys: ["JavaScript", "React", "Node", "Sass", "MongoDb"],
    urlLikendin: "https://www.linkedin.com/in/jose-mendez-31001b208",
    urlGit: "https://github.com/grials",
    src: imgProject1,
  },
  {
    title: "Clone Instagram",
    descripticion:
      "Instagram based social network was used as a React base in the fronend and in the NodeJS backend together with MongoDB.",
    categorys: ["JavaScript", "React", "Node", "Sass", "MongoDb"],
    urlLikendin: "https://www.linkedin.com/in/jose-mendez-31001b208",
    urlGit: "https://github.com/grials",
    src: imgProject1,
  },
  {
    title: "Portafolio",
    descripticion:
      "It is the current project that navigates it was made with technologies such as React, Sass, Redux among other smaller libraries.",
    categorys: ["JavaScript", "React", "Sass"],
    urlLikendin: "https://www.linkedin.com/in/jose-mendez-31001b208",
    urlGit: "https://github.com/grials",
    src: imgProject1,
  },
];
function Projects() {
  const [category, setCategory] = useState("All");
  const [projects, setProjects] = useState(objectProjects);

  useEffect(() => {
    if (category !== "All" && category) {
      const newProjects = objectProjects.filter((project) => {
        if (project.categorys.includes(category)) {
          return project;
        }
        return null;
      });
      setProjects(newProjects);
    } else {
      setProjects(objectProjects);
    }
  }, [category]);

  return (
    <div className="projects">
      <div className="continer">
        {objectCategory.map((categoria, index) => (
          <Buttom title={categoria} setCategory={setCategory} key={index} />
        ))}
      </div>
      <div className="continer">
        {projects.map((project, index) => (
          <Project
            urlGit={project.urlGit}
            urlLikendin={project.urlLikendin}
            title={project.title}
            description={project.descripticion}
            src={project.src}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

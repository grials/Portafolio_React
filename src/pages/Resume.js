import React from "react";
import Lines from "../component/Lines";
import Section from "../component/Section";
import "./Style/StyleResume.scss";
import ReactLogo from "../img/imgSkills/reactjs-icon.svg";
import NodeJsLogo from "../img/imgSkills/nodejs-seeklogo.com.svg";
import MongoDbLogo from "../img/imgSkills/mongodb.svg";
import MySqlLogo from "../img/imgSkills/mysql-6.svg";
import OracleLogo from "../img/imgSkills/oracle-6.svg";
import BootStrapLogo from "../img/imgSkills/bootstrap-4.svg";
import SassLogo from "../img/imgSkills/sass-1.svg";
import JavaScriptLogo from "../img/imgSkills/logo-javascript.svg";
import JavaLogo from "../img/imgSkills/java-4.svg";
import PhpLogo from "../img/imgSkills/php-1.svg";
import SqlLogo from "../img/imgSkills/logo-SQL.jpg";
import CssLogo from "../img/imgSkills/css-5.svg";
import HtmlLogo from "../img/imgSkills/html5.svg";
import Skills from "../component/Skills";
import WorkExp from "../component/WorkExp";
import Header from "../component/Header";
import useTheme from "../Hook/useTheme";

const objectSkills = [
  {
    src: ReactLogo,
    alt: "Reaxt logo",
    message:
      "Complete management and experience in applications designed and implemented with the react library and its complements.",
  },
  {
    src: NodeJsLogo,
    alt: "NodeJS logo",
    message:
      "Design, creation and implementation of backend language with Node Js for systems and web applications.",
  },
  {
    src: MongoDbLogo,
    alt: "MongoDb logo",
    message:
      "Experience in design and administration of MongoDb databases for web applications.",
  },
  {
    src: MySqlLogo,
    alt: "Mysql logo",
    message:
      "Knowledge in administration and creation of MySql databases in administrative systems.",
  },
  {
    src: OracleLogo,
    alt: "Oracle logo",
    message:
      "Design, creation and administration of Oracle applications either databases or PL-SQL language for their administration.",
  },
  {
    src: BootStrapLogo,
    alt: "BootStrap logo",
    message:
      "FrameWork BootStrap implementation for the layout and design of web applications.",
  },
  {
    src: SassLogo,
    alt: "Sass logo",
    message:
      "Experience in handling the Sass preprocessor for a faster and cleaner design.",
  },
  {
    src: JavaScriptLogo,
    alt: "JavaScript logo",
    message:
      "Complete command of the language plus a great use of technologies that support it.",
  },
  {
    src: JavaLogo,
    alt: "Java logo",
    message:
      "Knowledge and management of Java applications oriented to operating systems, business ...",
  },
  {
    src: PhpLogo,
    alt: "PHP logo",
    message: "Complete management and administration of PHP applications.",
  },
  {
    src: SqlLogo,
    alt: "SQL logo",
    message:
      "Experience in creation and administration of Sql databases as well as language skills at a high level.",
  },
  {
    src: CssLogo,
    alt: "CSS logo",
    message:
      "Absolute handling of the CSS language as well as the Flexbox and GRID layout modules.",
  },
  {
    src: HtmlLogo,
    alt: "HTML logo",
    message:
      "Complete and absolute handling of html5 as well as a good knowledge of SEO to be able to structure the web pages.",
  },
];

const objectWorkExp = [
  {
    title: "IFE - Institute of State Railways",
    ocupacion: "Web programmer",
    time: "From April 2019 Until February 2021 (Miranda - Venezuela)",
    tasks: [
      "Administration of 6 web applications made in PHP with the FrameWork Codeignitor version 3.",
      "Administration of 50 databases with the Postgres manager.",
      "Low-level server administration (IP administration and web page blocking).",
      "Generation of SQL and PHP scripts for the modification and creation of new functionalities in PHP-based applications.",
    ],
  },
];

const objectHistoryEduc = [
  {
    title: "Mechatronics Engineering",
    ocuapcion: "UNEXPO Venezuela",
    time: "2016 - Present",
  },
  {
    title: "Advanced Object-oriented PROGRAMMING with Java",
    ocuapcion: "Professional training",
    time: "2019-2020",
  },
  {
    title: "introduction to Ux / ui web design",
    ocuapcion: "professional training",
    time: "2019-2020",
  },
  {
    title: "advanced web programming with PHP(integration with codeignitor)",
    ocuapcion: "professional training",
    time: "2019-2020",
  },
];

function Resume() {
  const [mode, themeDark, themeLight] = useTheme();
  return (
    <div
      className="resume"
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <Lines />
      <Section title={"my skill"} span={"my skill"}>
        <div className="continerData">
          {objectSkills.map((elem, index) => (
            <Skills
              src={elem.src}
              alt={elem.alt}
              message={elem.message}
              key={index}
            />
          ))}
        </div>
      </Section>
      <Section title="Work experience" span="work experience">
        {/*className={"continerData"}*/}
        <div>
          {objectWorkExp.map((elem, index) => (
            <WorkExp
              title={elem.title}
              ocupacion={elem.ocupacion}
              time={elem.time}
              tasks={elem.tasks}
              key={index}
            />
          ))}
        </div>
      </Section>
      <Section title="Educational history" span="Educational history">
        <div className="continerData">
          {objectHistoryEduc.map((elemt, index) => (
            <Header
              className={`headerEduc ${
                mode === "LightTheme" ? "themeLightWorkExp" : "themeDarkWorkExp"
              }`}
              title={elemt.title}
              ocupacion={elemt.ocuapcion}
              time={elemt.time}
              key={index}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default Resume;

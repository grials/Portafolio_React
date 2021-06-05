import React from "react";
import Title from "./About/Title";
import "./StyleComponents/StyleSection.scss";

function Section({ title, span, children }) {
  return (
    <section className={`section`}>
      <Title title={title} span={span} />
      {children}
    </section>
  );
}

export default Section;

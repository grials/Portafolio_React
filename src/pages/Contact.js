import React from "react";
import Form from "../component/Contact/Form";
import PlantillaContact from "../component/Contact/PlantillaContact";
import Lines from "../component/Lines";
import Section from "../component/Section";
import "./Style/StyleContact.scss";
import useTheme from "../Hook/useTheme";

function Contact() {
  const [mode, themeDark, themeLight] = useTheme();
  return (
    <div
      className="contact"
      style={mode === "LightTheme" ? themeLight : themeDark}
    >
      <Lines />
      <Section title={"Contact"} span={"Contact"}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Form />
          <PlantillaContact />
        </div>
      </Section>
    </div>
  );
}

export default Contact;

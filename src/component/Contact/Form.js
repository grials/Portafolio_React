import React from "react";
import "./StyleForm.scss";
import useTheme from "../../Hook/useTheme";

function Form() {
  const [mode, ,] = useTheme();
  return (
    <form
      className={`form ${
        mode === "LightTheme" ? "themeLightForm" : "themeDarkForm"
      }`}
    >
      <h2>Get In Touch</h2>
      <input type="text" name="name" id="name" placeholder="name" />
      <input type="email" name="email" id="email" placeholder="email" />
      <input type="text" name="subject" id="subject" placeholder="subject" />
      <textarea name="message" id="message" placeholder="message"></textarea>
      <button>Sen Email</button>
    </form>
  );
}

export default Form;

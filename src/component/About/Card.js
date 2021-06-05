import React from "react";
import foto from "../../img/pexels-dimitry-zub-6636665.jpg";
import "./style/StyleCard.scss";
import useTheme from "../../Hook/useTheme";

function Card() {
  const [mode, ,] = useTheme();
  return (
    <div className="cardContiner">
      <img src={foto} alt="Foto profesional" />
      <div
        className={` continerProfile ${
          mode === "LightTheme" ? "themeLight" : "themeDark"
        }`}
      >
        <h3>
          I Am <span>Jose Mendez</span>
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum veniam
          beatae, vitae iure a consequuntur.
        </p>
        <div className="continerDtContiner">
          <div className="datosContiner">
            <div className="tituloDato">Full Name</div>
            <div className="dato">: Jose Manuel Mendez Romero</div>
          </div>
          <div className="datosContiner">
            <div className="tituloDato">Age</div>
            <div className="dato">: 23</div>
          </div>
          <div className="datosContiner">
            <div className="tituloDato">Nationality</div>
            <div className="dato">: Venezolano</div>
          </div>
          <div className="datosContiner">
            <div className="tituloDato">Idiomas</div>
            <div className="dato">: Spanish, English</div>
          </div>
          <div className="datosContiner">
            <div className="tituloDato">Location</div>
            <div className="dato">: Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="datosContiner">
            <div className="tituloDato">Service</div>
            <div className="dato">: Full Stack Web Developer</div>
          </div>
        </div>
        <button>DOWNLOAD CV</button>
      </div>
    </div>
  );
}

export default Card;

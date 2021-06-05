import React from "react";
import Particle from "../component/Particle";
import "./Style/StylePage404.scss";

function NotFound404() {
  return (
    <div className="page404">
      <div className="continerParticle">
        <Particle />
      </div>
      <h1>Page Not Found 404</h1>
    </div>
  );
}

export default NotFound404;

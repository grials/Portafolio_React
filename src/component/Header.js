import React from "react";
import "./StyleComponents/StyleHeader.scss";

function Header({ title, ocupacion, time, className }) {
  return (
    <div className={`header ${className}`}>
      <h2>{title}</h2>
      <h3>{ocupacion}</h3>
      <h4>{time}</h4>
    </div>
  );
}

export default Header;

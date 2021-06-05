import React from "react";
import "./StyleComponents/StyleButton.scss";

function Buttom({ title, setCategory }) {
  return (
    <button onClick={() => setCategory(title)} className="button">
      {title}
    </button>
  );
}

export default Buttom;

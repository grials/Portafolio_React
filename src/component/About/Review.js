import React from "react";
import "./style/StyleReview.scss";
import useTheme from "../../Hook/useTheme";

function Review({ message, src }) {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`review ${
        mode === "LightTheme" ? "themeLightReview" : "themeDarkReview"
      }`}
    >
      <p>
        <span>{message}</span>
      </p>
      <img src={src} alt="comentario" />
    </div>
  );
}

export default Review;

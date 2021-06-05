import React from "react";
import "./StyleComponents/StyleBlog.scss";
import useTheme from "../Hook/useTheme";

function Blog({ tittle, src, alt }) {
  const [mode, ,] = useTheme();
  return (
    <div
      className={`blog ${
        mode === "LightTheme" ? "themeLightBlog" : "themeDarkBlog"
      }`}
    >
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <h3>{tittle}</h3>
    </div>
  );
}

export default Blog;

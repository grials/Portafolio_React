import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const themeLight = {
  color: "#000",
  borderColor: "#6b6b6b",
  backgroundColor: "#cbced8",
  transition: "all .5s ease-in-out",
};
const themeDark = {
  color: "#FFF",
  borderColor: "#2e344e",
  backgroundColor: "#10121a",
  transition: "all .5s ease-in-out",
};

function useTheme() {
  const theme = useSelector((state) => state.theme);
  const [mode, setMode] = useState(theme);

  useEffect(() => {
    setMode(theme);
  }, [theme]);

  return [mode, themeDark, themeLight];
}

export default useTheme;

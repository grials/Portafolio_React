import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import "./StyleComponents/StyleMenuHamburger.scss";
function MenuHamburger() {
  const mobile_450px = useSelector((state) => state.mobile_450px);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState(mobile_450px);

  useEffect(() => {
    setMobile(mobile_450px);
  }, [mobile_450px]);

  if (mobile) {
    return (
      <div className="menuHamburger">
        <Hamburger
          color="#4FD1C5"
          duration={0.5}
          onToggle={(toggled) => {
            if (toggled) {
              dispatch({
                type: "MENU_HAMBURGER_TRUE",
              });
            } else {
              dispatch({
                type: "MENU_HAMBURGER_FALSE",
              });
            }
          }}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default MenuHamburger;

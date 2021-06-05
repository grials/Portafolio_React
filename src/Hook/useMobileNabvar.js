import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useMobileNabvar() {
  const menuMobileActive = useSelector((state) => state.menu_hamburger);
  const mobile450 = useSelector((state) => state.mobile_450px);
  const [mobile, setMobile] = useState(mobile450);
  const [activeMobile, setActiveMobile] = useState(menuMobileActive);

  useEffect(() => {
    setMobile(mobile450);
  }, [mobile450]);

  useEffect(() => {
    setActiveMobile(menuMobileActive);
  }, [menuMobileActive]);
  return [mobile, activeMobile];
}

export default useMobileNabvar;

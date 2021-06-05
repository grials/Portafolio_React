import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useTableNavBar() {
  const menuTableActive = useSelector((state) => state.menu_table);
  const table450 = useSelector((state) => state.table_750px);
  const [table, setTable] = useState(table450);
  const [activeTable, setActiveTable] = useState(menuTableActive);

  useEffect(() => {
    setTable(table450);
  }, [table450]);

  useEffect(() => {
    setActiveTable(menuTableActive);
  }, [menuTableActive]);
  return [table, activeTable];
}

export default useTableNavBar;

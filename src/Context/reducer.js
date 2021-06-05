const theme = {
  theme: "LightTheme",
  mobile_450px: false,
  menu_hamburger: false,
  table_750px: false,
  menu_table: false,
};

function reducer(state = theme, action) {
  switch (action.type) {
    case "THEME_LIGHT":
      return {
        ...state,
        theme: "LightTheme",
      };

    case "THEME_DARK":
      return {
        ...state,
        theme: "DarkTheme",
      };

    case "MOBILE_450PX_TRUE":
      return {
        ...state,
        mobile_450px: true,
      };

    case "MOBILE_450PX_FALSE":
      return {
        ...state,
        mobile_450px: false,
      };

    case "MENU_HAMBURGER_TRUE":
      return {
        ...state,
        menu_hamburger: true,
      };

    case "TABLE_750PX_TRUE":
      return {
        ...state,
        table_750px: true,
      };

    case "TABLE_750PX_FALSE":
      return {
        ...state,
        table_750px: false,
      };

    case "MENU_TABLE_FALSE":
      return {
        ...state,
        menu_table: false,
      };

    case "MENU_TABLE_TRUE":
      return {
        ...state,
        menu_table: true,
      };

    case "MENU_HAMBURGER_FALSE":
      return {
        ...state,
        menu_hamburger: false,
      };
    default:
      return state;
  }
}

export default reducer;

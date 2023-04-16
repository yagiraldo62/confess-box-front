import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import variables from "../assets/css/variables.module.scss";
const theme = createTheme({
  palette: {
    primary: {
      main: variables.primaryColor,
    },
    secondary: {
      main: variables.secondaryColor,
    },
  },
});
export default theme;

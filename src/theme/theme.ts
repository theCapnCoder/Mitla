import { createTheme } from "@mui/material";
import { breakpoints } from "./custom/breakpoints";
import { typography } from "./custom/typography";
import { MuiButton } from "./components/MuiButton";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiTypography } from "./components/MuiTypography";
import { MuiToggleButton } from "./components/MuiToggleButton";
import { MuiAppBar } from "./components/MuiAppBar";


const theme = createTheme({
  ...breakpoints,
  ...typography,
  components: {
      ...MuiAccordion,
      ...MuiAppBar,
      ...MuiButton,
      ...MuiToggleButton,
      ...MuiTypography,
  }
})

export default theme;

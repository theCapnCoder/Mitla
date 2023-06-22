import { createTheme } from "@mui/material";
import { breakpoints } from "./custom/breakpoints";
import { typography } from "./custom/typography";
import { MuiButton } from "./components/MuiButton";
import { MuiAccordion } from "./components/MuiAccordion";


const theme = createTheme({
  ...breakpoints,
  ...typography,
  components: {
    ...MuiButton,
    ...MuiAccordion,
  }
})

export default theme;

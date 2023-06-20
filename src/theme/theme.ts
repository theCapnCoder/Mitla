import { createTheme } from "@mui/material";
import { breakpoints } from "./custom/breakpoints";
import { MuiTypography } from "./components/MuiTypography";
import { typography } from "./custom/typography";
import { MuiButton } from "./components/MuiButton";


const theme = createTheme({
  ...breakpoints,
  ...typography,
  components: {
    ...MuiButton,
    // MuiTypography: {
    //   ...MuiTypography,
    // }
  }
})

export default theme;
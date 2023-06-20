import { createTheme } from "@mui/material";
import { breakpoints } from "./custom/breakpoints";
import { MuiTypography } from "./components/MuiTypography";
import { typography } from "./custom/typography";


const theme = createTheme({
  ...breakpoints,
  ...typography,
  components: {
    // MuiTypography: {
    //   ...MuiTypography,
    // }
  }
})

export default theme;
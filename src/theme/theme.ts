import { createTheme } from "@mui/material";
import { breakpoints } from "./custom/breakpoints";


const theme = createTheme({
  ...breakpoints
})

export default theme;
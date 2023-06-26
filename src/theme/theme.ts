import { createTheme } from "@mui/material";
import { breakpoints } from "./custom/breakpoints";
import { typography } from "./custom/typography";
import { MuiButton } from "./components/MuiButton";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiTypography } from "./components/MuiTypography";


const theme = createTheme({
  ...breakpoints,
  ...typography,
  components: {
    ...MuiButton,
    ...MuiAccordion,
    ...MuiTypography,
    // MuiToggleButtonGroup: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-selected': {
    //         backgroundColor: 'brown',
    //         color: 'white',
    //       },
    //       backgroundColor: "green",
    //       borderRadius: 0,
    //     },
    //   },

    // },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "27px 0 31px",
          textTransform: 'none',
          fontSize: 18,
            borderRadius: 6,
          fontWeight: 700,
          lineHeight: "22px",
          '&.Mui-selected': {
            backgroundColor: '#F25E57',
            borderRadius: 6,
            color: '#FFF',
          },
          // '&.Mui-selected:hover': {
          //   backgroundColor: 'brown',
          //   color: 'white',
          // },
        },
      },
    },
  }
})

export default theme;

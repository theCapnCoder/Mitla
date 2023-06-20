import { ComponentsOverrides, ComponentsVariants, Theme } from "@mui/material";

type ComponentsProps = {
  MuiTypography: {
    defaultProps?: ComponentsProps['MuiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
    variants?: ComponentsVariants['MuiTypography'];
  }
}

export const MuiTypography = {
  styleOverrides: {
    h1: {
      fontWeight: 600,
      color: 'green',
    }
  },
};
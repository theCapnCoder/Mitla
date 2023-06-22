import { ComponentsOverrides, ComponentsVariants, Theme } from "@mui/material";

type ComponentsProps = {
  MuiTypography: {
    styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
    variants?: ComponentsVariants['MuiTypography'];
  }
}

export const MuiTypography: ComponentsProps = {
  MuiTypography: {
    styleOverrides: {
      root: {
        textAlign: 'center',
        color: '#212121',
      }
    }
  }
};
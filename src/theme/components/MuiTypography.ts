import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

type Props = {
  MuiTypography: {
    defaultProps?: ComponentsProps['MuiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
    variants?: ComponentsVariants['MuiTypography'];
  }
}

export const MuiTypography: Props = {
  MuiTypography: {
    styleOverrides: {
      root: {
        textAlign: 'center',
        color: '#212121',
      }
    }
  }
};
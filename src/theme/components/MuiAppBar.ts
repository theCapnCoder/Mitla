import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

type Props = {
  MuiAppBar: {
    defaultProps?: ComponentsProps['MuiAppBar'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar'];
    variants?: ComponentsVariants['MuiAppBar'];
  }
}
export const MuiAppBar: Props = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: '#FFF',
      },
    },
  },
}
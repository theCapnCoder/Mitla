import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

type Props = {
  MuiToggleButton?: {
    defaultProps?: ComponentsProps['MuiToggleButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButton'];
    variants?: ComponentsVariants['MuiToggleButton'];
  }
}

export const MuiToggleButton: Props = {
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
      },
    },
  },
}

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
        color: '#212121',
        lineHeight: "22px",
        '&.Mui-selected': {
          backgroundColor: '#F25E57',
          borderRadius: 6,
          color: '#FFF',
          "&:hover": {
            backgroundColor: '#F25E57',
          }
        },
      },
      sizeSmall: {
        padding: "18px 0 19px",
      }
    },
  },
}

import { ComponentsOverrides, ComponentsVariants, Theme } from "@mui/material";

type ComponentsProps = {
  MuiButton?: {
    // defaultProps?: ComponentsProps['MuiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
    variants?: ComponentsVariants['MuiButton'];
  };
}

const socialTypography = {
  padding: '16px 52px 16px 26px',
  minWidth: 200,
  justifyContent: 'left',
  fontWeight: 600,
  fontSize: 15,
  lineHeight: '22px',
  color: '#FFFFFF',
}

export const MuiButton: ComponentsProps = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
      startIcon: {
        marginRight: 13,
        '& > *:nth-of-type(1)': {
          fontSize: 27,
        },
      },
      containedPrimary: {
        backgroundColor: '#1876F2',
        ...socialTypography,
      },
      containedSecondary: {
        backgroundColor: '#419FD9',
        ...socialTypography,
      },
      containedSuccess: {
        backgroundColor: '#0DC143',
        ...socialTypography,
      },
      // startIcon: {
      //   fontSize: '40px',
      //   color: 'red',
      // }
    },
  },
}


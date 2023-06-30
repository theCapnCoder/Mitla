import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

type Props = {
  MuiButton?: {
    defaultProps?: ComponentsProps['MuiButton'];
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

const footerTypography = {
  width: 240,
  padding: '20px',
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '22px',
  color: '#FFFFFF',
  borderColor: '#ECECEC',
}

export const MuiButton: Props = {
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
      outlined: {
        ...footerTypography,
      },
      sizeLarge: {
        padding: '22px 0',
        minWidth: '260px',
      },
      containedPrimary: {
        backgroundColor: '#1876F2',
        ...socialTypography,
      },
      containedSecondary: {
        backgroundColor: '#419FD9',
        ...socialTypography,
      },
      containedInfo: {
        backgroundColor: '#25B2B4',
      },
      containedSuccess: {
        backgroundColor: '#0DC143',
        ...socialTypography,
      },
      containedWarning: {
        backgroundColor: "#F25E57",
        borderRadius: 8,
        fontWeight: 700,
        fontSize: 20,
        lineHeight: '22px',
        color: '#FFFFFF',
      }
    },
  },
}


import { ComponentsOverrides, ComponentsVariants, Theme } from "@mui/material";

type ComponentsProps = {
  MuiAccordion?: {
    styleOverrides?: ComponentsOverrides<Theme>['MuiAccordion'];
    variants?: ComponentsVariants['MuiAccordion'];
  }
}

export const MuiAccordion: ComponentsProps = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backgroundColor: '#FAFAFA',
        '& .MuiAccordionSummary-content': {
          margin: '40px 0',
          fontWeightBold: 700,
          fontSize: 40,
          lineHeight: '48px',
        },
        '& MuiAccordionSummary-root': {
          padding: '100px',
        }
      },
    },
  },
}
import { SvgIcon, SvgIconProps } from "@mui/material";

export const GreenCircle = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Group 6">
        <circle
          id="Ellipse 3"
          opacity="0.5"
          cx="18"
          cy="18"
          r="18"
          fill="#25B2B4"
        />
        <circle id="Ellipse 4" cx="18" cy="18" r="9" fill="#25B2B4" />
      </g>
    </SvgIcon>
  );
};

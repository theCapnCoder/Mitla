import { FC } from "react";
import { Box, Typography, styled } from "@mui/material";
import { GreenCircle } from "../../../assets/img/GreenCircle";

type coordinate = {
  top: string;
  bottom: string;
  left: string;
  right: string;
};

type Props = {
  title: string;
  text?: string;
  coordinate?: Partial<coordinate>;
  width?: string;
  size?: "small" | "medium" | "large";
};

const TitleTypography = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "22px",
  textAlign: "left",
});

const TextTypography = styled(Typography)({
  fontSize: 14,
  fontWeight: 300,
  lineHeight: "22px",
  textAlign: "left",
});

const getSize = (size: "small" | "medium" | "large" | undefined) => {
  if (size === "small") {
    return "18px 30px";
  }
  if (size === "medium") {
    return "21px 30px";
  }
  if (size === "large") {
    return "29px 33px";
  }
  return "29px 31px 21px 26px";
};

export const Label: FC<Props> = ({ title, text, coordinate, width, size }) => {
  return (
    <Box
      sx={{
        padding: getSize(size),
        position: "absolute",
        ...coordinate,
        borderRadius: 2,
        backgroundColor: "#FFF",
        width,
      }}
    >
      <TitleTypography mb={text ? 1 : 0}>{title}</TitleTypography>
      <TextTypography>{text}</TextTypography>

      <GreenCircle
        fontSize="large"
        sx={{
          position: "absolute",
          top: "calc(50% - 16px)",
          right: "-17px",
        }}
      />
    </Box>
  );
};

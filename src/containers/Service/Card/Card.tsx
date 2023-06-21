import { FC } from "react";
import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import { Card as TCard } from "../types";

const TitleTypography = styled(Typography)({
  maxWidth: "145px",
  fontWeight: 700,
  fontSize: 18,
  lineHeight: "22px",
  textAlign: "center",
  color: "#212121",
});

const CardPaper = styled(Paper)({
  width: "256px",
  height: "256px",
  padding: "48px 0",
  backgroundColor: "#FAFAFA",
  borderRadius: "6px",
});

export const Card: FC<TCard> = ({ img, alt, title }) => {
  return (
    <CardPaper>
      <Stack alignItems="center">
        <Box sx={{mb: 3}}>
          <img src={img} alt={alt} />
        </Box>
        <TitleTypography>{title}</TitleTypography>
      </Stack>
    </CardPaper>
  );
};

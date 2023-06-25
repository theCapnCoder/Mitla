import { FC } from "react";
import { Card } from "../discountData";
import { Box, Stack, Typography, styled } from "@mui/material";

const TitleTypography = styled(Typography)({
  fontSize: 22,
  fontWeight: 700,
  lineHeight: "22px",
});

const TextTypography = styled(Typography)({
  fontSize: 18,
  fontWeight: 300,
  lineHeight: "30px",
});

export const DiscountCard: FC<Card> = ({ img, alt, title, text }) => {
  return (
    <Stack alignItems={"center"} sx={{width: "328px" }}>
      <Box mb={3.125}>
        <img src={img} alt={alt} />
      </Box>
      <TitleTypography variant={"h2"} mb={1.125}>{title}</TitleTypography>
      <TextTypography variant={"h2"}>{text}</TextTypography>
    </Stack>
  );
};

import { FC } from "react";
import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import { Card as TCard } from "../../containers/Service/types";

const TitleTypography = styled(Typography)({
  maxWidth: "200px",
  fontWeight: 700,
  fontSize: 18,
  lineHeight: "22px",
  textAlign: "center",
  color: "#212121",
});

const PriceTypography = styled(Typography)({
  fontWeight: 700,
  fontSize: 22,
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

type Props = TCard & {
  large?: boolean;
};

export const ServiceCard: FC<Props> = ({
  img,
  alt,
  title,
  text,
  price,
  large,
}) => {
  return (
    <CardPaper
      sx={{
        padding: large ? "31px 0 25px" : "47px 0",
      }}
    >
      <Stack justifyContent="space-between" height="100%">
        <Stack alignItems="center">
          <Box sx={{ mb: large ? 1 : 3 }}>
            <img src={img} alt={alt} />
          </Box>
          <TitleTypography>{title}</TitleTypography>
          {text}
        </Stack>

        {price && (
          <Box
            sx={{
              padding: "9px 27px 12px",
              backgroundColor: "#FFC73B",
              borderRadius: 1,
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            <PriceTypography>{price}</PriceTypography>
          </Box>
        )}
      </Stack>
    </CardPaper>
  );
};

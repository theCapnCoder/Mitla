import { Box, Paper, Typography, styled, Button } from "@mui/material";
import { FC } from "react";

export type Card = {
  title: string;
  price: string;
  text: string;
};

type Props = Card;

const TitleTypography = styled(Typography)({
  fontSize: 30,
  fontWeight: 700,
  lineHeight: "22px",
  textAlign: "left",
});

const PriceTypography = styled(Typography)({
  fontSize: 40,
  fontWeight: 800,
  lineHeight: "22px",
  textAlign: "left",
});

const TextTypography = styled(Typography)({
  fontSize: 18,
  fontWeight: 300,
  lineHeight: "36px",
  textAlign: "left",
});

export const PriceCard: FC<Props> = ({ title, price, text }) => (
  <Paper sx={{ padding: "0 47px 44px 38px " }}>
    <Box
      mb={4}
      sx={{ width: "39px", height: "77px", backgroundColor: "#25B2B4" }}
    ></Box>
    <TitleTypography variant={"h2"} mb={5}>
      {title}
    </TitleTypography>
    <PriceTypography variant={"h2"} mb={3.75}>
      {price}
    </PriceTypography>
    <TextTypography variant={"h2"} mb={5}>
      {text}
    </TextTypography>

    <Button
      variant="contained"
      color="warning"
      fullWidth
      sx={{ padding: "33px 0" }}
    >
      Заказать
    </Button>
  </Paper>
);

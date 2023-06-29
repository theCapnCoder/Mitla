import { Box, Typography, styled } from "@mui/material";
import { SwipeableTextMobileStepper } from "../../components/SwipeableTextMobileStepper";
import { ButtonsGroup } from "./ButtonsGroup";
import bg from "../../assets/img/bg.jpg";
import Order from "../Order";
import { Counter } from "../../components/Calculate/Counter/Counter";
import { Calculate } from "../../components/Calculate";

const BackgroundBox = styled(Box)({
  height: "820px",
  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #25B2B4 100%), url(${bg})`,
});

export const Main = () => {
  return (
    <Box>
      <BackgroundBox pt={27}>
        <Typography mb={4} variant="h1">
          Закажи уборку квартиры
        </Typography>
        <Typography mb={7} variant="h4">
          В услугу входит уборка комнаты, кухни, ванной комнаты и коридора
        </Typography>

        <Box width={"1400px"} m={"0 auto"}>
          <Calculate />
        </Box>
      </BackgroundBox>

      <Box sx={{ pb: '145px', backgroundColor: "#25B2B4" }}>
        <Box mb={5}>
          <SwipeableTextMobileStepper />
        </Box>

        <ButtonsGroup />
      </Box>
    </Box>
  );
};

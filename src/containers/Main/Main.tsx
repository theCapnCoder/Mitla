import { Box, Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../../components/SwipeableTextMobileStepper";
import { ButtonsGroup } from "./ButtonsGroup";

export const Main = () => {
  return (
    <Box sx={{ pb: 16.88, backgroundColor: "#25B2B4" }}>
      <Typography variant="h1">Закажи уборку квартиры</Typography>
      <Typography variant="h4">
        В услугу входит уборка комнаты, кухни, ванной комнаты и коридора
      </Typography>

      <Box mb={5}>
        <SwipeableTextMobileStepper />
      </Box>

      <ButtonsGroup />
    </Box>
  );
};

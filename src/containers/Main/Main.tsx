import { Box, Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../../components/SwipeableTextMobileStepper";

export const Main = () => {
  return (
    <Box sx={{ backgroundColor: "#25B2B4" }}>
      <Typography variant="h1">Закажи уборку квартиры</Typography>
      <Typography variant="h4">
        В услугу входит уборка комнаты, кухни, ванной комнаты и коридора
      </Typography>

      <SwipeableTextMobileStepper />
    </Box>
  );
};

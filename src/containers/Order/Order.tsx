import { Box, Typography } from "@mui/material";
import Support from "../Support";
import { Calculate } from "../../components/Calculate";

export const Order = () => {
  return (
    <Box width={"1400px"} m={"0 auto"}>
      <Typography variant="h2" mb={8.5}>
        Заказать уборку квартиры
      </Typography>

      <Calculate />

      <Box mb={19.25}>
        <Support text="Живая служба поддержки 24/7" />
      </Box>
    </Box>
  );
};

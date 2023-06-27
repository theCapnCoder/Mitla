import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Counter } from "./Counter/Counter";
import Support from "../Support";

export const Order = () => {
  return (
    <Box width={"1400px"} m={"0 auto"}>
      <Typography variant="h2" mb={8.5}>
        Заказать уборку квартиры
      </Typography>

      <Stack
        direction={"row"}
        mb={10.325}
        sx={{ backgroundColor: "#FAFAFA", borderRadius: "8px" }}
      >
        <Divider orientation="horizontal" />
        <Counter name="комната" />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Counter name="caнузел" />
        <Divider orientation="horizontal" />
        <Button
          sx={{ flexShrink: 0, padding: "39px 37px" }}
          variant="contained"
          color="warning"
        >
          Рассчитать стоимость →
        </Button>
      </Stack>

      <Box mb={19.25}>
        <Support text="Живая служба поддержки 24/7" />
      </Box>
    </Box>
  );
};

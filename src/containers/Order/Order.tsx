import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { Counter } from "./Counter/Counter";

export const Order = () => {
  const res: Array<string | number> = ["one", "two", 12, 32];

  console.log(
    res.map((el) => {
      return el;
    })
  );

  return (
    <Box width={"1400px"} m={"0 auto"}>
      <Typography variant="h2" mb={8.5}>
        Заказать уборку квартиры
      </Typography>

      <Stack
        direction={"row"}
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
    </Box>
  );
};

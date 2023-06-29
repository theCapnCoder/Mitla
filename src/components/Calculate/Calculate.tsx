import { Button, Divider, Stack } from "@mui/material";
import { Counter } from "./Counter";

export const Calculate = () => {
  return (
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
  );
};

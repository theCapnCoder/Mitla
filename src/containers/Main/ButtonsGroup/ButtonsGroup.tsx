import { Button, Stack } from "@mui/material";

export const ButtonsGroup = () => {
  return (
    <Stack direction={"row"} spacing={2.5} justifyContent={"center"} >
      <Button variant="outlined" size="large">Оставить свой отзыв  →</Button>
      <Button variant="outlined" size="large">Все отзывы  →</Button>
    </Stack>
  );
};

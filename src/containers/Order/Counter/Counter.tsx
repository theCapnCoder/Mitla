import React, { FC } from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { Minus } from "../../../assets/img/Minus";
import { Plus } from "../../../assets/img/Plus";

type CounterProps = {
  name: string;
};

const ButtonStyled = styled(Button)({
  fontSize: 19,
  minWidth: 70,
  height: "100%",
});

const TypographyStyled = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "22px",
});

export const Counter: FC<CounterProps> = ({ name }) => {
  const [counter, setCounter] = React.useState<number>(1);

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        width: "100%",
      }}
    >
      <ButtonStyled onClick={() => setCounter(counter - 1)}>
        <Minus />
      </ButtonStyled>

      <Box py={5}>
        <TypographyStyled variant="h2">
          {counter} {name}
        </TypographyStyled>
      </Box>

      <ButtonStyled onClick={() => setCounter(counter + 1)}>
        <Plus />
      </ButtonStyled>
    </Stack>
  );
};

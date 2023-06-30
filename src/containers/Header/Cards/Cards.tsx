import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { cards } from "./cardsData";

export const Cards = () => {
  return (
    <Stack direction={"row"}>
      {cards.map(({ title }) => (
        <Paper elevation={0}>
          <Stack key={title} alignItems={"center"}>
            <Box
              sx={{marginBottom: 1, width: "38px", height: "38px", backgroundColor: "#ECECEC" }}
            ></Box>
            <Typography>{title}</Typography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

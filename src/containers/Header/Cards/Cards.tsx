import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import { cards } from "./cardsData";

const TextTypography = styled(Typography)({
  fontSize: 13,
  fontWeight: 500,
  lineHeight: "18px",
});

export const Cards = () => {
  return (
    <Stack direction={"row"} maxWidth={"702px"}>
      {cards.map(({ title }) => (
        <Paper key={title} elevation={0}>
          <Stack alignItems={"center"}>
            <Box
              sx={{
                marginBottom: 1,
                width: "38px",
                height: "38px",
                backgroundColor: "#ECECEC",
              }}
            ></Box>
            <TextTypography>{title}</TextTypography>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

import { Box, Stack, Typography } from "@mui/material";
import { Card } from "./Card";
import serviceCards from "./serviceCards";

export const Service = () => {
  return (
    <Box sx={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 0" }}>
      <Typography variant="h2" sx={{ mb: "50px" }}>
        Наши услуги
      </Typography>
      <Stack
        direction="row"
        gap={3.5}
        maxWidth="calc((5 * 256px) + (30px*4))"
        flexWrap="wrap"
        justifyContent="center"
      >
        {serviceCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
};

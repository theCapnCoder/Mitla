import { Box, Stack, Typography } from "@mui/material";
import serviceCards from "./serviceCards";
import { ServiceCard } from "../../components/ServiceCard";

export const Service = () => {
  return (
    <Box sx={{ maxWidth: "1400px", margin: "0 auto", pt: "135px" }}>
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
          <ServiceCard key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
};

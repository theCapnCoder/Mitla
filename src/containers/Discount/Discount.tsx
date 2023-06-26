import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import discountCards from "./discountData";
import { DiscountCard } from "./DiscountCard";
import { ButtonGroup } from "../../components/ButtonGroup";
import buttonData from "./buttonData";

export const Discount = () => {
  return (
    <Box sx={{ padding: "135px 0", margin: "0 auto", maxWidth: "1400px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        mb={17}
      >
        {discountCards.map((card, index) => (
          <DiscountCard key={index} {...card} />
        ))}
      </Stack>

      <Typography variant="h2">Скидки для постоянных клиентов</Typography>

      <ButtonGroup data={buttonData} />
    </Box>
  );
};

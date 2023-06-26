import { Box, Stack, Typography, styled } from "@mui/material";
import discountCards from "./discountData";
import { DiscountCard } from "./DiscountCard";
import { ButtonGroup } from "../../components/ButtonGroup";
import buttonData from "./buttonData";
import { PriceCard } from "./PriceCard";
import { priceData } from "./priceData";

const TextTypography = styled(Typography)({
  fontSize: 24,
  lineHeight: "44px",
});

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

      <Typography variant="h2" mb={2.75}>
        Скидки для постоянных клиентов
      </Typography>
      <TextTypography mb={7.5}>
        Выберите периодичность уборки, чтобы увидеть цену с учетом скидки
      </TextTypography>

      <Box mb={6.25}>
        <ButtonGroup data={buttonData} size="small" />
      </Box>

      <Stack direction={"row"} gap={4}>
        {priceData.map((card, index) => (
          <PriceCard key={index} {...card} />
        ))}
      </Stack>
    </Box>
  );
};

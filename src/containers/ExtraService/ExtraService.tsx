import { Box, Button, Stack, Typography, styled } from "@mui/material";
import extraServiceCards from "./extraServiceCard";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";

const TextTypography = styled(Typography)({
  fontSize: 20,
  lineHeight: "44px",
  textAlign: "center",
  color: "#212121",
});

export const ExtraService = () => {
  return (
    <Box sx={{ padding: "135px 0" }}>
      <Typography variant="h2" sx={{ pb: 6.25 }}>
        Дополнительные услуги
      </Typography>

      <Stack
        direction="row"
        gap={3.5}
        sx={{
          m: "0 auto",
          mb: 10.75,
          width: "1960px",
          marginLeft: "-20px",
        }}
      >
        {extraServiceCards.map((card, index) => (
          <ServiceCard key={index} large {...card} />
        ))}
      </Stack>
      <Typography variant="h3" sx={{ mb: 1 }}>
        Закажи уборку квартиры
      </Typography>
      <TextTypography sx={{ mb: 4.75 }}>
        Порядок в твоей жизни начинается с порядка в твоем доме
      </TextTypography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ padding: "33px 88px" }}
          variant="contained"
          color="warning"
        >
          Узнай стоимость
        </Button>
      </Box>
    </Box>
  );
};

import { Box, Button, Stack, Typography, styled } from "@mui/material";
import partners from "./partnersData";

const SubTitleTypography = styled(Typography)({
  color: "#25B2B4",
  fontSize: 24,
  fontWeight: 600,
  lineHeight: "44px",
});

const TextTypography = styled(Typography)({
  fontSize: 20,
  lineHeight: "40px",
});

const SubTextTypography = styled(Typography)({
  fontSize: 18,
  fontWeight: 300,
  lineHeight: "36px",
});

export const Partners = () => {
  return (
    <Box sx={{ padding: "135px 0" }}>
      <Typography variant="h2" mb={4}>
        Наши партнеры
      </Typography>

      <Stack
        direction="row"
        flexWrap={"wrap"}
        justifyContent={"center"}
        maxWidth={"1400px"}
        sx={{ margin: "0 auto", mb: 17 }}
      >
        {partners.map(({ img }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px",
              height: "120px",
            }}
          >
            <img src={img} alt="partner" />
          </Box>
        ))}
      </Stack>

      <Typography variant="h2" mb={2.75}>
        Корпоративные скидки и программы
      </Typography>
      <SubTitleTypography mb={2.75}>
        Как работает система бонусов, как получить корпоративную скидку
      </SubTitleTypography>
      <TextTypography
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          mb: 3,
        }}
      >
        Если вы хотите стать корпоративным клиентом и получить дополнительные
        бонусы и для себя и для своих сотрудников, заполни форму ниже и наш
        менеджер свяжется с вами
      </TextTypography>
      <SubTextTypography mb={6.25}>
        *Условия бонусов  для сотрудников узнавайте у вашего работодателя
      </SubTextTypography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ padding: "33px 48px" }}
          variant="contained"
          color="warning"
        >
          Стать корпоративным клиентом
        </Button>
      </Box>
    </Box>
  );
};

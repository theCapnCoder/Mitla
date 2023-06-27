import { Box, Stack, Typography, styled } from "@mui/material";
import { Logo } from "../../../assets/img/Logo";
import visa1 from "../../../assets/img/Cards/visa1.png";
import visa2 from "../../../assets/img/Cards/visa2.png";
import masterCard1 from "../../../assets/img/Cards/masterCard1.png";
import masterCard2 from "../../../assets/img/Cards/masterCard2.png";

const TextTypography = styled(Typography)({
  fontSize: 15,
  lineHeight: "27px",
  textAlign: "left",
  color: "#FFF",
});

export const BankData = () => {
  return (
    <Box sx={{ width: "230px", pt: '70px' }}>
      <Box mb={5}>
        <Logo sx={{ width: "231px", height: "74px" }} />
      </Box>
      <Box mb={"35px"}>
        <TextTypography>Milta Sp. z o.o.,</TextTypography>
        <TextTypography>KRS 0000868230,</TextTypography>
        <TextTypography>NIP: 6751738063,</TextTypography>
        <TextTypography>REGON: 38745511400000</TextTypography>
      </Box>

      <Stack mb={"30px"} direction="row" justifyContent={"space-between"}>
        <img src={visa1} alt="visa one" />
        <img src={visa2} alt="visa two" />
      </Stack>

      <Box mb={2.5}>
        <img src={masterCard1} alt="master card one" />
      </Box>

      <Box>
        <img src={masterCard2} alt="master card two" />
      </Box>
    </Box>
  );
};

import { Box, Stack, Typography, styled } from "@mui/material";
import { Pin } from "../../../assets/img/Contacts/Pin";
import { Mail } from "../../../assets/img/Contacts/Mail";
import { Call } from "../../../assets/img/Contacts/Call";

const TextTypography = styled(Typography)({
  fontSize: 17,
  fontWeight: 600,
  lineHeight: "26px",
  textAlign: "left",
  color: "#FFF",
});

export const Contacts = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      sx={{ maxWidth: "810px" }}
    >
      <Stack direction={"row"}>
        <Pin sx={{ marginRight: "20px", width: "24px", height: "32px" }} />
        <TextTypography sx={{ maxWidth: "328px" }}>
          Warszawa, Al. Jana Pawła II lok 125, 00-175 Warszawa
        </TextTypography>
      </Stack>

      <Stack direction={"row"}>
        <Mail sx={{ marginRight: "23px", width: "38px", height: "23px" }} />
        <TextTypography>info@mitla.pl</TextTypography>
      </Stack>

      <Stack direction={"row"}>
        <Call sx={{ marginRight: "23px", width: "29px", height: "29px" }} />
        <TextTypography>+48 797 524 604</TextTypography>
      </Stack>
    </Stack>
  );
};

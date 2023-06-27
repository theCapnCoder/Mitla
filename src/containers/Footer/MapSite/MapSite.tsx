import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import { footerData } from "../footerData";
import { Contacts } from "../Contacts";
import { Buttons } from "../Buttons";
// import { LogoLittle } from "../../../assets/img/LogoLittle";

const TitleTypography = styled(Typography)({
  fontSize: 20,
  fontWeight: 700,
  lineHeight: "31px",
  textAlign: "left",
  color: "#FFF",
});

const CategorieTypography = styled(Typography)({
  fontSize: 17,
  lineHeight: "26px",
  textAlign: "left",
  color: "#FFF",
});

export const MapSite = () => {
  return (
    <Box sx={{ width: "100%", pt: "87px" }}>
      <Stack
        direction={"row"}
        flexGrow={1}
        justifyContent={"space-between"}
        mb={5}
      >
        {footerData.map(({ title, categories }, index) => (
          <Box key={index} width={"263px"}>
            {typeof title === "string" ? (
              <TitleTypography mb={2.75}>{title}</TitleTypography>
            ) : (
              <Box mb={2.75}>{title}</Box>
            )}

            <Divider sx={{ mb: 2.75, borderColor: "#ECECEC" }} />
            {categories.map((category, index) => (
              <CategorieTypography key={index} mb={1.875}>
                {category}
              </CategorieTypography>
            ))}
          </Box>
        ))}
      </Stack>

      <Box mb={7}>
        <Contacts />
      </Box>

      <Buttons />
    </Box>
  );
};

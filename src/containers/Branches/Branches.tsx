import { Box, Stack, Typography, styled } from "@mui/material";
import branches from "./branchesData";
import { Marker } from "../../assets/img/Marker";

const PriceTypography = styled(Typography)({
  fontSize: 17,
  fontWeight: 700,
  lineHeight: "22px",
});

const NameTypography = styled(Typography)({
  fontSize: 17,
  fontWeight: 500,
  lineHeight: "22px",
});

export const Branches = () => {
  return (
    <Box sx={{ maxWidth: "1400px", margin: "0 auto", py: "135px" }}>
      <Typography variant="h2" sx={{ mb: 6.5 }}>
        В каких городах мы работаем
      </Typography>

      <Box
        sx={{
          display: "grid",
          height: "645px",
          gridTemplateRows: "repeat(12, 1fr)",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: "15px",
          columnGap: "64px",
          gridAutoFlow: "column",
        }}
      >
        {branches.map(({ city, price }, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mr: 2 }}>
                <Marker
                  sx={{
                    display: "block",
                    width: "30px",
                    height: "40px",
                  }}
                />
              </Box>
              <Box sx={{ margin: "auto 0" }}>
                <NameTypography>{city}</NameTypography>
              </Box>
            </Box>
            <PriceTypography pr="5px">{price}</PriceTypography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};

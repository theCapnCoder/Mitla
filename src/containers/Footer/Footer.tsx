import { Box, Stack } from "@mui/material";
import { BankData } from "./BankData";
import { MapSite } from "./MapSite";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#212121" }}>
      <Box
        mb={50}
        sx={{
          width: "1400px",
          margin: "0 auto",
          paddingBottom: "118px",
        }}
      >
        <Stack direction={"row"}>
          <Box mr={"115px"}>
            <BankData />
          </Box>
          <MapSite />
        </Stack>
      </Box>
    </Box>
  );
};

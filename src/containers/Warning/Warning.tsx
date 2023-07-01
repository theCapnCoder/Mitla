import { Stack, Typography, styled } from "@mui/material";

const TextTypography = styled(Typography)({
  fontSize: 56,
});

export const Warning = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      <TextTypography>Only 1920px</TextTypography>
    </Stack>
  );
};

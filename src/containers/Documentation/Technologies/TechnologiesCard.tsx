import { FC } from "react";
import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import { Technologies } from "./technologiesData";

const TitleTypography = styled(Typography)({
  maxWidth: "200px",
  fontWeight: 700,
  fontSize: 18,
  lineHeight: "22px",
  textAlign: "center",
  color: "#212121",
});

const CardPaper = styled(Paper)({
  width: "200px",
  height: "200px",
  padding: "48px 0",
  backgroundColor: "#FAFAFA",
  borderRadius: "6px",
});

type Props = Technologies;

export const TechnologiesCard: FC<Props> = ({ img, title }) => {
  return (
    <CardPaper>
      <Stack justifyContent="space-between" height="100%">
        <Stack alignItems="center">
          {typeof img === "string" ? (
            <Box sx={{ mb: 3, width: 80, height: 80 }}>
              <img
                src={img}
                alt={img}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
          ) : (
            <Box mb={2}>{img}</Box>
          )}
          <TitleTypography>{title}</TitleTypography>
        </Stack>
      </Stack>
    </CardPaper>
  );
};

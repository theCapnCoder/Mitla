import { Box, BoxProps, Paper, Stack, Typography, styled } from "@mui/material";
import newsData from "./newsData";

interface ImageProps extends BoxProps<"img"> {
  src: string;
  alt: string;
}

const DateTypography = styled(Typography)({
  color: "#25B2B4",
  fontSize: 15,
  fontWeight: 700,
  lineHeight: "30px",
  textAlign: "left",
});

const TitleTypography = styled(Typography)({
  fontSize: 22,
  fontWeight: 700,
  lineHeight: "31px",
  textAlign: "left",
});

const TextTypography = styled(Typography)({
  fontSize: 17,
  fontWeight: 300,
  lineHeight: "30px",
  textAlign: "left",
});

const ParentContainer = styled(Paper)(() => ({
  marginBottom: 3.725,
  position: "relative",
  width: "100%",
  // height: 0,
  paddingBottom: "100%",
  overflow: "hidden",
}));

const Image = styled(Box)<ImageProps>({
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const News = () => {
  return (
    <Box py="135px">
      <Typography variant="h2" mb={6.25}>
        Последние новости
      </Typography>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {newsData.map(({ img, date, title, text }, index) => (
          <Box
            key={index}
            sx={{
              width: "447px",
              height: "280px",
            }}
          >
            <ParentContainer>
              <Image component="img" src={img} alt="news" />
            </ParentContainer>
            <DateTypography mb={1.125}>{date}</DateTypography>
            <TitleTypography mb={1.25}>{title}</TitleTypography>
            <TextTypography>{text}</TextTypography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

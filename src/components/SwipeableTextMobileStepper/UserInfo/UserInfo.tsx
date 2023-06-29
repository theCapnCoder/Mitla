import { Avatar, Box, Rating, Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import { Slider } from "../sliderData";

const NameTypography = styled(Typography)({
  paddingLeft: 2,
  color: "#FFF",
  fontSize: 20,
  fonWeight: 700,
  lineHeight: "26px",
  textAlign: "left",
})

const TextTypography = styled(Typography)({
  maxWidth: 751,
  color: "#FFF",
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "36px",
})

type UserInfoProps = Slider 

export const UserInfo: FC<UserInfoProps> = ({ img, text, userName, stars }) => {

  return (
    <Stack mt={8.25} alignItems={"center"}>

      <Stack mb={2.37} direction={"row"} alignItems={"center"}>
        <Avatar sx={{ width: 100, height: 100, mr: 3.15}} alt={text} src={img} />
        <Box>
          <NameTypography mb={0.75}>{userName}</NameTypography>

          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating name="read-only" value={stars} readOnly />
          </Box>
        </Box>
      </Stack>

      <TextTypography>{text}</TextTypography>
    </Stack>
  );
};

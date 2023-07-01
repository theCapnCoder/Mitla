import { Stack } from "@mui/material";
import { pixelPerfectData } from "./pixelPerfectData";
import { PixelPerfectCard } from "./PixelPerfectCard";

export const PixelPerfect = () => {
  return (
    <Stack
      direction="row"
      gap={3.5}
      maxWidth="calc((5 * 256px) + (30px*4))"
      flexWrap="wrap"
      justifyContent="center"
      sx={{
        margin: "0 auto",
      }}
    >
      {pixelPerfectData.map((card, index) => (
        <PixelPerfectCard key={index} {...card} />
      ))}
    </Stack>
  );
};

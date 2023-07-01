import { Stack } from "@mui/material";
import { TechnologiesData } from "./technologiesData";
import { TechnologiesCard } from "./TechnologiesCard";


export const Technologies = () => {
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
      {TechnologiesData.map((card, index) => (
        <TechnologiesCard key={index} {...card} />
      ))}
    </Stack>
  );
};

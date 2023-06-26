import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import buttonData from "./buttonData";

const DiscountTypography = styled(Typography)({
  fontSize: 22,
  fontWeight: 700,
  lineHeight: "22px",
});

const TextTypography = styled(Typography)({
  color: "#FFF",
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "22px",
  textTransform: "none",
});

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  padding: "40px",
  backgroundColor: "aqua",
  "&.Mui-selected": {
    backgroundColor: "red",
    color: "brown",
    fontSize: 45,
  },
  "& .Mui-selected": {
    backgroundColor: "red",
    color: "brown",
  },
  "& Mui-selected": {
    backgroundColor: "red",
    color: "brown",
  },
}));

export const ButtonGroup = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");
  const [selected, setSelected] = React.useState(1);
  console.log(selected);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Box
        sx={{ width: "100px", height: "30px", "&:hover": { bgcolor: "aqua" } }}
      >
        Test
      </Box>


      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          0
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          1
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          2
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          3
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          Zero
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          First
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Second
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          Third
        </ToggleButton>
      </ToggleButtonGroup>

      <CustomToggleButton value={{}}>
        <ToggleButton
          value="option1"
          sx={{
            backgroundColor: "#FAFAFA",
            "&.Mui-selected": {
              backgroundColor: "purple",
            },
          }}
        >
          Option 1
        </ToggleButton>
        <ToggleButton
          value="option2"
          sx={{
            backgroundColor: "#FAFAFA",
            "&.Mui-selected": {
              backgroundColor: "blue",
            },
          }}
        >
          Option 2
        </ToggleButton>
        <ToggleButton
          value="option3"
          sx={{
            backgroundColor: "#FAFAFA",
            "&.Mui-selected": {
              backgroundColor: "green",
            },
          }}
        >
          Option 3
        </ToggleButton>
      </CustomToggleButton>

      {/* <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        {buttonData.map(({ discount, text, id }, index) => (
          <ToggleButton
            sx={{
              // backgroundColor: selected === id ? "#F25E57" : "#FAFAFA",
              backgroundColor: selected === id ? "red" : "blue",
              // backgroundColor: 'yellow',
              "&.Mui-selected": {
                backgroundColor: "purple",
              },
            }}
            onClick={(e, value) => setSelected(value)}
            selected={selected === id}
            key={index}
            value={id}
            aria-label="left aligned"
          >
            <Stack
              direction="row"
              columnGap="18px"
              alignItems={"center"}
              sx={{
                backgroundColor: selected === id ? "#F25E57" : "#FAFAFA",
                borderRadius: 1.5,
                height: "100%",
              }}
            >
              <Box
                sx={{
                  padding: "9px 10px 12px",
                  backgroundColor: "#FFC73B",
                  borderRadius: 1,
                  minWidth: 76,
                  height: 43,
                }}
              >
                <DiscountTypography>{discount}</DiscountTypography>
              </Box>
              <TextTypography
                sx={{ color: selected === id ? "#FFF" : "#212121" }}
              >
                {text}
              </TextTypography>
            </Stack>
          </ToggleButton>
        ))}
      </ToggleButtonGroup> */}
    </>
  );
};

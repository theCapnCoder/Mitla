import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { FC } from "react";

export type ButtonGroupProps = {
  discount?: string;
  text: string;
  id: number;
};

export type Props = {
  data: ButtonGroupProps[];
  size?: "small" | "medium" | "large";
};

const DiscountTypography = styled(Typography)({
  fontSize: 22,
  fontWeight: 700,
  lineHeight: "22px",
});

export const ButtonGroup: FC<Props> = ({ data, size }) => {
  const [alignment, setAlignment] = React.useState<string | null>("left");
  const [selected, setSelected] = React.useState(1);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      size={size}
      onChange={handleAlignment}
      aria-label="text alignment"
      fullWidth
    >
      {data.map(({ text, discount, id }, index) => (
        <ToggleButton
          key={index}
          selected={selected === id}
          onClick={() => setSelected(id)}
          value={id}
          sx={{ flexGrow: 1 }}
        >
          {discount && (
            <Stack
              direction="row"
              columnGap="18px"
              alignItems={"center"}
              sx={{
                borderRadius: 1.5,
                mr: "18px",
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
            </Stack>
          )}
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

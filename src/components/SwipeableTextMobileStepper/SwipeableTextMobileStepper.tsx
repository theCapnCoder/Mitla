import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { PrevArrow } from "../../assets/img/PrevArrow";
import { NextArrow } from "../../assets/img/NextArrow";

const AutoPlaySwipeableViews = SwipeableViews;

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ position: "relative", display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "100px",
          width: "1400px",
        }}
      >
        <MobileStepper
          style={{ backgroundColor: "transparent" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{
                color: "transparent",
                "&.Mui-disabled": { color: "transparent" },
              }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <Box>
                <NextArrow sx={{ width: "18px", height: "45px" }} />
              </Box>
            </Button>
          }
          backButton={
            <Box>
              <Button
                sx={{
                  color: "transparent",
                  "&.Mui-disabled": { color: "transparent" },
                }}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <Box>
                  <PrevArrow sx={{ width: "18px", height: "45px" }} />
                </Box>
              </Button>
            </Box>
          }
        />
      </Box>

      <Box
        sx={{
          maxWidth: "500px",
          margin: "0 auto",
          flexGrow: 1,
          backgroundColor: "grey",
        }}
      >
        <Box sx={{}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
    </Box>
  );
};

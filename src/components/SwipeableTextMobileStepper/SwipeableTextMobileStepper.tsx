import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { PrevArrow } from "../../assets/img/PrevArrow";
import { NextArrow } from "../../assets/img/NextArrow";
import { sliderData } from "./sliderData";
import { UserInfo } from "./UserInfo";
import { ButtonGroup } from "@mui/material";
import { ButtonsGroup } from "../../containers/Main/ButtonsGroup";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const AutoPlaySwipeableViews = SwipeableViews;

export const SwipeableTextMobileStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = sliderData.length;

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
          top: "185px",
          width: "1400px",
        }}
      >
        <MobileStepper
          style={{ padding: 0, backgroundColor: "transparent" }}
          steps={0}
          position="static"
          nextButton={
            <Button
              sx={{
                justifyContent: "flex-end",
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
                  justifyContent: "flex-start",
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
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {sliderData.map((step, index) => (
              <div key={step.text}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <UserInfo {...step} />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Box>
      </Box>
    </Box>
  );
};

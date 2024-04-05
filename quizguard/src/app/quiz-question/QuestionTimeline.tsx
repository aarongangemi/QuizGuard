import { Check } from "@mui/icons-material";
import Step from "@mui/joy/Step";
import StepIndicator from "@mui/joy/StepIndicator";
import Stepper from "@mui/joy/Stepper";
import { FC } from "react";

interface Props {
  steps: number[];
  activeStep: number;
}

export const QuestionTimeline: FC<Props> = ({ steps, activeStep }) => {
  return (
    <Stepper sx={{ width: "100%" }} size="md">
      {steps.map((step, index) => (
        <Step
          key={step}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? "soft" : "solid"}
              color={activeStep < index ? "neutral" : "primary"}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={{
            "&::after": {
              bgcolor: "black",
            },
          }}
        />
      ))}
    </Stepper>
  );
};

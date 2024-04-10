import { Stack, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  currentScore: number;
}

export const CurrentScore: FC<Props> = ({ currentScore }) => {
  return (
    <Stack textAlign={"center"} ml={1}>
      <Typography variant="subtitle2" whiteSpace={"nowrap"}>
        Current score:
      </Typography>
      <Typography variant="subtitle2" fontWeight={"bold"}>
        {currentScore.toLocaleString()}pts
      </Typography>
    </Stack>
  );
};

import { CircularProgress, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  text: string;
}

export const LoadingBase: FC<Props> = ({ text }) => {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <CircularProgress color="inherit" />
      <Typography>{text}</Typography>
    </Stack>
  );
};

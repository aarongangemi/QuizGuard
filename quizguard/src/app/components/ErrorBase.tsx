import { Stack, Typography, Button } from "@mui/material";
import { FC } from "react";

export const ErrorBase: FC = () => {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Typography textAlign={"center"}>
        Something went wrong...
        <br />
        Refresh the page or try again later.
      </Typography>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Refresh
      </Button>
    </Stack>
  );
};

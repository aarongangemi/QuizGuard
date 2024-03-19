"use client";

import { Box } from "@mui/material";
import { FlexCenter } from "./Components/FlexCenter";
import { LoginForm } from "./Components/LoginForm";

export default function Login() {
  return (
      <Box justifyContent={'center'} alignItems={'center'} display={'flex'} height={'95vh'} width={'95vw'}>
        <LoginForm />
      </Box>
  );
}

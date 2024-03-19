import React, { FC, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import logo from '../../../public/logo.png';
import { SessionStorageHelper } from "../Helpers/SessionStorageHelper";

interface FormValues {
  username: string;
}

export const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const handleSubmit = () => {
    SessionStorageHelper.setUsername(username);
  };
  return (
    <Box
      width={1000}
      height={720}
      borderRadius={6}
      bgcolor={'#eeecece8'}
      border={1}
    >
      <form onSubmit={handleSubmit} style={{ width: '100%', height: '100%'}}>
        <Stack spacing={2} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'}>
            <Image src={logo} alt="login" width={210} height={160}/>
            <TextField label="Username" size="small" required defaultValue={username} onChange={(v) => setUsername(v.currentTarget.value)}/>
            <Button variant="contained" type="submit">Continue</Button>
        </Stack>
      </form>
    </Box>
  );
};


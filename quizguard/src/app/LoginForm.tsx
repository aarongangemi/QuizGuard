import React, { FC, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import logo from '../../public/logo.png';
import { SessionStorageHelper } from "./helpers/SessionStorageHelper";
import { useRouter } from "next/navigation";

interface FormValues {
  username: string;
}

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();
  const handleSubmit = () => {
    SessionStorageHelper.setUsername(username);
    router.push('http://localhost:3000/modules');
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
            <Button variant="contained" type="submit" onClick={handleSubmit}>Continue</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;

"use client";

import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import useSidebar from "../hooks/useSidebar";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-240px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function Modules() {
  const { handleDrawerClose, handleDrawerOpen, open } = useSidebar();
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Main open={open}>
        <DrawerHeader />
        dsdsds
      </Main>
    </Box>
  )
}
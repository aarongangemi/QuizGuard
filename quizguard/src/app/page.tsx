"use client";

import { Box, Stack } from "@mui/material";
import { SidebarAndHeaderBar } from "./components/SidebarAndHeaderBar";
import { StaticImageData } from "next/image";
import { DrawerHeader } from "./components/DrawerHeader";
import { Main } from "./components/Main";
import { ModuleItemContainer } from "./components/ModuleItemContainer";
import { Timeline } from "@mui/lab";
import React, { useEffect, useState } from "react";
import useSidebar from "./hooks/useSidebar";
import { ModuleData } from "./components/ModuleData";

export interface ModuleContent {
  image: StaticImageData;
  description: string;
  title: string;
  order: number;
  link: string;
  isNext?: boolean;
  key: string;
}

export default function Modules() {
  const { open } = useSidebar();
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarAndHeaderBar />
      <Main open={open}>
        <DrawerHeader />
        <Timeline>
          <Stack alignItems={"center"} justifyContent={"center"} spacing={4}>
            {ModuleData.map((x) => (
              <ModuleItemContainer module={x} key={x.title} />
            ))}
          </Stack>
        </Timeline>
      </Main>
    </Box>
  );
}

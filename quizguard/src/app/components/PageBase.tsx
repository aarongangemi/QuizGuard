import { FC, ReactNode } from "react";
import useSidebar from "../hooks/useSidebar";
import { Box } from "@mui/material";
import { SidebarAndHeaderBar } from "./SidebarAndHeaderBar";
import { DrawerHeader } from "./DrawerHeader";
import { Main } from "./Main";

interface Props {
  children: ReactNode;
}

export const PageBase: FC<Props> = ({ children }) => {
  const { open } = useSidebar();
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarAndHeaderBar />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

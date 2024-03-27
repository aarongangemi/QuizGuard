import { FC, ReactNode } from "react";
import useSidebar from "../hooks/useSidebar";
import { Box } from "@mui/material";
import { DrawerHeader } from "./DrawerHeader";
import { SidebarAndHeaderBar } from "./SidebarAndHeaderBar";
import { Main } from "./Main";
import { ModuleButtonsFooter } from "./ModuleButtonsFooter";

interface Props {
    children: ReactNode;
}

export const PageBase: FC<Props> = ({ children}) => {
    const { open } = useSidebar();
    return (
        <Box sx={{ display: 'flex' }} >
            <SidebarAndHeaderBar />
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    )
}
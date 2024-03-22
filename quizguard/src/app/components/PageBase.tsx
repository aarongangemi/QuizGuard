import { FC, ReactNode } from "react";
import useSidebar from "../hooks/useSidebar";
import { Box } from "@mui/material";
import { DrawerHeader } from "./DrawerHeader";
import { SidebarAndHeaderBar } from "./SidebarAndHeaderBar";
import { Main } from "./Main";
import { ModuleButtonsFooter } from "./ModuleButtonsFooter";

interface FooterNavigationProps {
    previousLink: string;
    nextLink: string;
    previousText?: string;
    nextText?: string;
}

interface Props {
    children: ReactNode;
    footerNavigation: FooterNavigationProps;
}

export const PageBase: FC<Props> = ({ children, footerNavigation }) => {
    const { open } = useSidebar();

    return (
        <Box sx={{ display: 'flex' }} >
            <SidebarAndHeaderBar />
            <Main open={open}>
            <DrawerHeader />
            {children}
            <ModuleButtonsFooter {...footerNavigation}/>
            </Main>
        </Box>
    )
}
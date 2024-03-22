import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SchoolIcon from '@mui/icons-material/School';import { FlexCenter } from './FlexCenter';
import NameLogo from '../../../public/NameLogo.png';
import Image from "next/image";
import QuizIcon from '@mui/icons-material/Quiz';
import LogoSymbol from '../../../public/LogoSymbol.png';
import { Box, Stack} from '@mui/material';
import { FC } from 'react';
import useSidebar from '../hooks/useSidebar';
import { useRouter } from 'next/navigation';
import { Tabs } from './Tabs';
import { SessionStorageHelper } from '../helpers/SessionStorageHelper';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

export const SidebarAndHeaderBar: FC = () => {
    const theme = useTheme();
    const { open, handleDrawerOpen, handleDrawerClose } = useSidebar();
    const router = useRouter();
    return (
    <>
    <CssBaseline />
      <AppBar position="fixed" open={open} color='transparent' style={{backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <FlexCenter>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <Image src={NameLogo} alt="login" width={200} height={40}/>
            </IconButton>
          </FlexCenter>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
            <Box ml={1}>
              <h4>Hello, {SessionStorageHelper.getUsername()}</h4>
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Stack>
        </DrawerHeader>
        <Divider />
        <List>
          {Object.values(Tabs).map((text, index) => (
            <ListItem key={text} disablePadding onClick={() => router.push(Tabs.Modules === text ? '/modules' : '/take-quiz')}>
              <ListItemButton style={{color: window.location.pathname === text ? '#0080ffd8' : 'gray', fontWeight: 'bold'}}>
                <ListItemIcon>
                  {index % 2 === 0 ? <SchoolIcon /> : <QuizIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
    )
}
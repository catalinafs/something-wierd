import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import { ListItemIcon } from '@mui/material';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

const drawerWidth = 240;
const LinksDrawer = [
    {
        id: 1,
        text: 'APUESTAS',
        icon: <PaidOutlinedIcon fontSize='large' sx={{ color: '#212121' }} />
    },
    {
        id: 2,
        text: 'TRABAJOS',
        icon: <HistoryEduOutlinedIcon fontSize='large' sx={{ color: '#212121' }} />
    },
    {
        id: 3,
        text: 'PERFIL',
        icon: <AccountCircleOutlinedIcon fontSize='large' sx={{ color: '#212121' }} />
    },
    {
        id: 4,
        text: 'SALIR',
        icon: <LogoutOutlinedIcon fontSize='large' sx={{ color: '#212121' }} />
    },
];
const LinksNavBar = [
    {
        id: 1,
        text: 'APUESTAS',
        icon: <PaidOutlinedIcon />
    },
    {
        id: 2,
        text: 'SALIR',
        icon: <LogoutOutlinedIcon />
    },
    {
        id: 3,
        text: 'MI PERFIL',
        icon: <AccountCircleOutlinedIcon fontSize='large' />
    }
];

function Header() {
    const [open, setOpen] = useState();

    const Img = styled('img')({
        width: '180px',
        marginTop: '5px',
        marginBottom: '5px',
        objectFit: 'cover',
        objectPosition: 'center',
    });

    const Img2 = styled('img')({
        width: '230px',
        marginTop: 0,
        marginBottom: 0,
        // objectFit: 'cover',
        // objectPosition: 'center',
    });

    return (
        <>
            <Drawer
                open={open}
                anchor='left'
                onClose={() => { setOpen(false) }}
            >
                <Box sx={{ textAlign: 'center' }} >
                    <Box sx={{
                        width: '250px',
                        height: '118px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#1599d7',
                    }} >
                        <Img2
                            src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
                            alt='spotify_logo'
                        />
                    </Box>
                    <Divider />
                    <List>
                        {LinksDrawer.map(({ id, text, icon }) => (
                            <ListItem key={id} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemIcon>
                                        {icon}
                                        <ListItemText primary={
                                            <Typography color="initial" fontWeight={600}>
                                                {text}
                                            </Typography>
                                        } sx={{ marginLeft: .4}} />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box >
            </Drawer>

            <AppBar component="nav">
                <Toolbar sx={{ justifyContent: 'space-between', padding: 1 }}>
                    <Img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' alt='spotify_logo' />
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => { setOpen(true) }}
                        sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
                            gap: 1.5,
                        }}
                    >
                        {LinksNavBar.map((item) => (
                            <Typography
                                component='a'
                                key={item.id}
                                sx={{
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: .5,
                                    fontWeight: 600,
                                }}
                            >
                                {item.icon}
                                {item.text}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
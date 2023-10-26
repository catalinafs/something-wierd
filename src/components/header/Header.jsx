import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { AppBar, Drawer, Divider, Box, Toolbar } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

const LinksDrawer = [
    {
        id: 1,
        icon: <PaidOutlinedIcon fontSize='large' sx={{ color: 'secondary.main' }} />,
        text: 'APUESTAS',
        path: '/all-bets'
    },
    {
        id: 2,
        icon: <HistoryEduOutlinedIcon fontSize='large' sx={{ color: 'secondary.main' }} />,
        text: 'TRABAJOS',
        path: '/works'
    },
    {
        id: 3,
        icon: <AccountCircleOutlinedIcon fontSize='large' sx={{ color: 'secondary.main' }} />,
        text: 'PERFIL',
        path: '/profile'
    },
    {
        id: 4,
        icon: <LogoutOutlinedIcon fontSize='large' sx={{ color: 'secondary.main' }} />,
        text: 'SALIR',
        path: '/logout'
    },
];

const LinksNavBar = [
    {
        id: 1,
        icon: <PaidOutlinedIcon />,
        text: 'APUESTAS',
        path: '/all-bets'
    },
    {
        id: 2,
        icon: <LogoutOutlinedIcon />,
        text: 'SALIR',
        path: '/logout'
    },
    {
        id: 3,
        icon: <AccountCircleOutlinedIcon fontSize='large' />,
        text: 'MI PERFIL',
        path: '/profile'
    }
];

function Header() {
    const [open, setOpen] = useState();

    const Img = styled('img')({
        width: '165px',
        marginTop: '5px',
        marginBottom: '5px',
        objectFit: 'cover',
        objectPosition: 'center',
    });

    const Img2 = styled('img')({
        width: '230px',
        marginTop: 0,
        marginBottom: 0,
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
                        backgroundColor: 'primary.main',
                    }} >
                        <Img2 src='/img/Spotify_Logo.png' alt='spotify_logo' />
                    </Box>

                    <Divider />

                    <List>
                        {LinksDrawer.map(({ id, text, icon, path }) => (
                            <ListItem key={id} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <Link key={id} to={path} style={{ textDecoration: 'none' }}>
                                        <ListItemIcon onClick={() => setOpen(false)}>
                                            {icon}
                                            <ListItemText
                                                primary={
                                                    <Typography color="initial" fontWeight={600}>
                                                        {text}
                                                    </Typography>
                                                }
                                                sx={{ marginLeft: .4 }}
                                            />
                                        </ListItemIcon>
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box >
            </Drawer>

            <AppBar component="nav" position='static' sx={{ backgroundColor: 'primary.main' }}>
                <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between', padding: 1 }}>
                    <Img src='/img/Spotify_Logo.png' alt='spotify_logo' />
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
                            alignItems: 'center',
                            gap: 1.5,
                        }}
                    >
                        {LinksNavBar.map((link) => (
                            <Link key={link.id} to={link.path} style={{ textDecoration: 'none' }}>
                                <NavLinks icon={link.icon} text={link.text} />
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
import React from 'react';
import { Typography } from '@mui/material';

const NavLinks = ({ icon, text }) => {
    return (
        <Typography
            component='h2'
            sx={{
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: .5,
                fontWeight: 600,
                textDecoration: 'none',
            }}
        >
            {icon}
            {text}
        </Typography>
    )
}

export default NavLinks

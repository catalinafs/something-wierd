import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import BettingCard from './BettingCard';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SideBarProfile() {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            sx={{
                backgroundColor: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: '#efeeec',
                    xl: '#efeeec',
                },
                padding: { xs: 0, sm: 0, md: 0, lg: '40px', xl: '40px' },
                minWidth: '35%'
            }}
        >
            <Typography variant="h5" sx={{
                fontWeight: 900,
                padding: 0,
                margin: 0,
                wordBreak: 'keep-all'
            }}>
                Apuestas mas populares
            </Typography>
            <BettingCard />
            <BettingCard />
            <BettingCard />
            <Button
                variant="outlined"
                color="primary"
                sx={{
                    padding: '5px 24px',
                    borderRadius: '20px',
                    marginTop: '40px',
                    fontWeight: 600,
                    fontSize: '16px',
                }}
            >
                Ver más
            </Button>
        </Stack>
    );
}
import styled from '@emotion/styled';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';

export default function BettingCard() {
    const Img = styled('img')({
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'center',
    });

    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                width: '300px',
                borderRadius: '20px',
                paddingY: 1,
                paddingX: 2,
                minWidth: 'fit-content'
            }}
        >
            <Img src='https://callingfriends.com/assets/Images/Default_icon_profile.webp' alt='Image-Profile' />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                    <Typography component="span" fontWeight={600} fontSize='.8rem'>
                        Descripción:
                    </Typography>
                    <Box sx={{ marginY: '4px' }}>
                        <Typography component="h6" fontWeight={900} fontSize='.8rem' wrap>
                            Termina: NaN/Nan/NaN
                        </Typography>
                        <Typography component="h6" fontWeight={900} fontSize='.8rem' wrap>
                            Monto: Euros
                        </Typography>
                    </Box>
                </Box>

                <Button
                    aria-label="Betting"
                    variant='contained'
                    sx={{
                        color: '#fff',
                        borderRadius: '20px',
                        fontWeight: 600,
                        padding: '6px 16px'
                    }}
                >
                    ¿Crees que pasará al contrario? ¡Apuesta!
                </Button>
            </Box>
        </Card>
    );
}
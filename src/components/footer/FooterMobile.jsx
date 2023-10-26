import { Box, Typography } from '@mui/material';

const FooterMobile = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 1,
            }}
        >
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>NOSOTROS</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>CONTACTO</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>PRIVACIDAD</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>TERMS DEL SERVICIO</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>COMO FUNCIONA</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>POLITICAS DE USO</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>PAGO SEGURO</Typography>
        </Box>
    );
}

export default FooterMobile;

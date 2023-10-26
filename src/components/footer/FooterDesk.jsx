import { Box, Typography } from '@mui/material';

const FooterDesk = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                wordBreak: 'keep-all',
                gap: { md: .5, lg: 1, xl: 1 },
            }}
        >
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>NOSOTROS</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>TERMS DEL SERVICIO</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>PRIVACIDAD</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>COMO FUNCIONA</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>POLITICAS DE USO</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>PAGO SEGURO</Typography>
            <Typography variant='paragraph' sx={{ fontWeight: '300', fontSize: '16px' }}>CONTACTO</Typography>
        </Box>
    );
}

export default FooterDesk;

import { useContext } from 'react';
import { ContextResponsive } from '../../context/Responsive';
import FooterDesk from './FooterDesk';
import { Box, Typography } from '@mui/material';
import FooterMobile from './FooterMobile';

const Footer = () => {
    const { mobile } = useContext(ContextResponsive);

    return (
        <>
            <Box
                sx={{
                    marginTop: '56px',
                    marginBottom: '24px',
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row', xl: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography variant='paragraph' sx={{ fontWeight: 900, fontSize: '16px' }}>
                    CallingFriends. 2023
                </Typography>

                {mobile <= 940 ? <FooterMobile /> : <FooterDesk />}
            </Box>
        </>
    );
};

export default Footer;
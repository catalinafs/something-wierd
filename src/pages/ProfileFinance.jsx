import React from 'react';
import HeaderProfile from '../components/profile/HeaderProfile';
import Footer from '../components/footer/Footer';
import { Container } from '@mui/material';

const ProfileFinance = () => {
    return (
        <>
            <HeaderProfile />
            <Container maxWidth='lg'
                sx={{
                    padding: '0 20px',
                    display: 'flex',
                    width: '100%'
                }}
            >
                Profile Finance
            </Container>
            <Container maxWidth='lg'>
                <Footer />
            </Container>
        </>
    );
}

export default ProfileFinance;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { Data } from '../../API/data';
import styled from '@emotion/styled';
import { Alert, Box, Snackbar, Typography } from "@mui/material";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const HeaderProfile = () => {
    const [backgroundImage, setBackgroundImage] = useState(Data.user.bannerImage);
    const [userImage, setuserImage] = useState(Data.user.userImage);
    const [alertUploadImg, setAlertUploadImg] = useState(false);

    useEffect(() => {
        const storedImageUrl = localStorage.getItem('backgroundImage');
        if (storedImageUrl) {
            setBackgroundImage(storedImageUrl);
        }
    }, []);

    function handleBannerProfile(event) {
        const bgImageFile = event.target.files[0];
        if (bgImageFile) {
            const imageUrl = URL.createObjectURL(bgImageFile);
            setBackgroundImage(imageUrl);
            localStorage.setItem('backgroundImage', imageUrl);

            setAlertUploadImg(true); 
        }
    };

    // const handleFileUpload = (event) => {
    //     // const file = event.target.files[0];
    //     const imageUrl = URL.createObjectURL(file);
    //     setBackgroundImage(imageUrl);
    //     localStorage.setItem('backgroundImage', imageUrl);
    // };

    // function handleBannerProfile(event) {
    //     const bgImageFile = event.target.files[0];
    //     if (bgImageFile) {
    //         const FileReaderBG = new FileReader();
    //         FileReaderBG.onload = (onloadEvent) => {
    //             const bgImageUrl = onloadEvent.target.result;
    //             setBackgroundImage(bgImageUrl);
    //         };
    //         FileReaderBG.readAsDataURL(bgImageFile);

    //         setAlertUploadImg(true);
    //     }
    // };

    function handleUserImage(event) {
        const bgImageFile = event.target.files[0];
        if (bgImageFile) {
            const FileReaderBG = new FileReader();
            FileReaderBG.onload = (onloadEvent) => {
                const bgImageUrl = onloadEvent.target.result;
                setuserImage(bgImageUrl);
            };
            FileReaderBG.readAsDataURL(bgImageFile);

            setAlertUploadImg(true);
        }
    };

    function handleImgAlertClose(event) {
        setAlertUploadImg(false);
    };

    const LinkR = styled(Link)({
        textDecoration: 'none',
        zIndex: '10',
    });

    const LinksNavBar = [
        {
            id: 1,
            icon: <PersonOutlineOutlinedIcon />,
            text: 'DATOS',
            path: '/profile',
            widthLink: 'auto',
            widthSmall: '100%',
        },
        {
            id: 2,
            icon: <PaidOutlinedIcon />,
            text: 'APUESTAS',
            path: '/profile/bets',
            widthLink: '200px',
            widthSmall: '100%',
        },
        {
            id: 3,
            icon: <LocalAtmOutlinedIcon />,
            text: 'FINANZAS',
            path: '/profile/finance',
            widthLink: '160px',
            widthSmall: '100%',
        }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    backgroundColor: '#212121',
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                        lg: '90%',
                        xl: '90%'
                    },
                    maxWidth: '1151px',
                    height: '400px',
                }}
            >
                <Banner
                    backgroundImage={backgroundImage}
                    handleBannerProfile={handleBannerProfile}
                    userImage={userImage}
                    handleUserImage={handleUserImage}
                />

                {/* Nav Profile */}
                <Box
                    sx={{
                        width: '100%',
                        height: '15%',
                        padding: { xs: 0, sm: 0, md: '0 55px', lg: '0 55px', xl: '0 55px' },
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: {
                            xs: 'center',
                            sm: 'center',
                            md: 'space-evenly',
                            lg: 'flex-end',
                            xl: 'flex-end'
                        },
                        gap: { xs: '7%', sm: '15%' },
                        borderTop: '2px solid #fff',
                        borderBottom: '2px solid #fff',
                    }}
                >
                    {
                        LinksNavBar.map((link) => {
                            return (
                                <LinkR key={link.id} to={link.path}>
                                    <Typography
                                        component='h3'
                                        sx={{
                                            width: {
                                                xs: link.widthSmall,
                                                sm: link.widthSmall,
                                                md: link.widthSmall,
                                                lg: link.widthLink,
                                                xl: link.widthLink,
                                            },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: {
                                                xs: 'center',
                                                sm: 'center',
                                                md: 'center',
                                                lg: 'flex-end',
                                                xl: 'flex-end'
                                            },
                                            gap: .5,
                                            color: '#fff',
                                            fontSize: { xs: '.7rem', sm: '.9rem', md: '.9rem', lg: '1rem', xl: '1.2rem' },
                                            fontWeight: 600,
                                        }}
                                    >
                                        {link.icon}
                                        {link.text}
                                    </Typography>
                                </LinkR>
                            );
                        })
                    }
                </Box>
            </Box>
            <Snackbar open={alertUploadImg} autoHideDuration={6000} onClose={(event) => { handleImgAlertClose(event) }}>
                <Alert severity="success" onClose={() => { setAlertUploadImg(false) }}>Se a actualizado correctamente</Alert>
            </Snackbar>
        </Box >
    );
}

export default HeaderProfile;

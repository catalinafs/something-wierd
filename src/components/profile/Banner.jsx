import { Box, Button, Typography } from '@mui/material';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import styled from '@emotion/styled';
import { Data } from '../../API/data';

const Banner = ({ backgroundImage, handleBannerProfile, userImage, handleUserImage }) => {
    const Img = styled('img')({
        height: '100%',
        width: '100%',
        objectPosition: 'center',
        zIndex: '1',
    });

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <>
            {/* Profile Header */}
            <Box
                sx={{
                    width: '100%',
                    height: '85%',
                    paddingBottom: { xs: '12px', sm: '12px', md: '12px', lg: '70px', xl: '70px' },
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    backgroundColor: '#b0b0b0',
                    backgroundImage: `url(${backgroundImage || Data.user.bannerImage})`,
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                }}
            >
                {/* Update Button Background Image */}
                <Button
                    component="label"
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: '20px',
                        padding: '6px 16px',
                        fontSize: { xs: '.55rem', sm: '.9rem', md: '1rem', lg: '1rem', xl: '1rem' },
                        fontWeight: 600,
                        position: 'absolute',
                        top: '5%',
                        right: '5%',
                    }}
                >
                    Actualizar portada
                    <VisuallyHiddenInput
                        type='file'
                        accept="image/*"
                        onChange={(event) => { handleBannerProfile(event) }}
                    />
                </Button>

                {/* Info User */}
                <Box
                    sx={{
                        width: '74%',
                        paddingRight: '22px',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
                        justifyContent: 'center',
                        alignItems: { xs: 'flex-end', sm: 'flex-end', md: 'flex-end', lg: 'center', xl: 'center' },
                    }}
                >
                    {/* Name & Username */}
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' },
                            height: '100%',
                            paddingRight: '10px',
                            textAlign: { xs: 'right', sm: 'right', md: 'right', lg: 'left', xl: 'left' },
                            fontWeight: 'bold',
                            display: 'flex',
                            flexDirection: 'column',
                            zIndex: '5',
                        }}
                    >
                        <Typography
                            variant="h4"
                            color="blanquito"
                            sx={{
                                width: '100%',
                                fontWeight: 600,
                                fontSize: { xs: '19px', sm: '30px', md: '30px', lg: '30px', xl: '32px' },
                            }}
                        >Isabela Mercedes</Typography>
                        <Typography
                            variant="span"
                            color="blanquito"
                            sx={{
                                fontSize: { xs: '14px', sm: '27px', md: '27px', lg: '16px', xl: '16px' },
                            }}
                        >@isixmerces</Typography>
                    </Box>

                    {/* Followers & Follows */}
                    <Box
                        sx={{
                            width: '50%',
                            height: '100%',
                            textAlign: { xs: 'left', sm: 'left', md: 'left' },
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'flex-end', lg: 'center', xl: 'center' },
                            gap: '30px',
                            zIndex: '5',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textShadow: '0 5px 16px #000000b0',
                            }}
                        >
                            <Typography
                                variant="h4"
                                color="blanquito"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', sm: '1.4rem', md: '1.4rem', lg: '1.4rem', xl: '1.4rem' },
                                }}
                            >0</Typography>
                            <Typography
                                variant="h4"
                                color="blanquito"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', sm: '1.4rem', md: '1.4rem', lg: '1.4rem', xl: '1.4rem' },
                                }}
                            >Seguidores</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textShadow: '0 5px 16px #000000b0',
                            }}
                        >
                            <Typography
                                variant="h4"
                                color="blanquito"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', sm: '1.4rem', md: '1.4rem', lg: '1.4rem', xl: '1.4rem' },
                                }}
                            >0</Typography>
                            <Typography
                                variant="h4"
                                color="blanquito"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', sm: '1.4rem', md: '1.4rem', lg: '1.4rem', xl: '1.4rem' },
                                }}
                            >Seguidos</Typography>
                        </Box>
                    </Box>

                    {/* Profile Image & Update Button Profile Image */}
                    <Box
                        sx={{
                            width: '70%',
                            display: 'flex',
                            flexDirection: 'row',
                            aligItems: 'center',
                            position: 'absolute',
                            bottom: { xs: '-10px', sm: '-10px', md: '-10px', lg: '-12%', xl: '-12%' },
                            left: '8%',
                        }}
                    >
                        {/* User Avatar */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px',
                                zIndex: '1',
                            }}
                        >
                            <Button
                                component="label"
                                variant="contained"
                                color="primary"
                                sx={{
                                    borderRadius: '20px',
                                    padding: '6px 16px',
                                    fontSize: { xs: '.55rem', sm: '.9rem', md: '1rem', lg: '1rem', xl: '1rem' },
                                    fontWeight: 600,
                                }}
                            >
                                Actualizar Avatar
                                <VisuallyHiddenInput
                                    type='file'
                                    accept="image/*"
                                    onChange={(event) => { handleUserImage(event) }}
                                />
                            </Button>
                            <Box
                                sx={{
                                    width: { xs: '128px', sm: '196px', md: '196px', lg: '180px', xl: '180px' },
                                    height: { xs: '128px', sm: '196px', md: '196px', lg: '180px', xl: '180px' },
                                    overflow: 'hidden',
                                    backgroundColor: '#fff',
                                    borderRadius: '50%',
                                    border: '4px solid #fff',
                                }}
                            >
                                <Img
                                    src={userImage}
                                    alt='Profile-Image'
                                />
                            </Box>
                        </Box>

                        {/* User Link */}
                        <Box
                            sx={{
                                width: '100%',
                                height: '45px',
                                marginTop: '130px',
                                marginLeft: '-20px',
                                paddingLeft: '48px',
                                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
                                alignItems: 'center',
                                gap: '25px',
                                background: 'linear-gradient(90deg, #fff 51%, rgba(69, 9, 121, 0))',
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="h5"
                                sx={{
                                    fontSize: '24px',
                                    fontWeight: 900,
                                    color: 'primary.main',
                                    wordBreak: 'break-all'
                                }}
                            >
                                callingfriends.com/isixmerces
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'naranjita',
                                    borderRadius: '20px',
                                }}
                                startIcon={<IosShareOutlinedIcon />}
                            >
                                Compartir
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Banner;

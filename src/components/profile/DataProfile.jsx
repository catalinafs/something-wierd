import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const DataProfile = () => {
    return (
        <Box sx={{ width: '100%', marginTop: '24px', }}>
            <Typography variant="h4" sx={{
                fontWeight: 900,
                marginX: 0,
                paddingBottom: 0,
                paddingTop: '16px',
            }}>
                Mi información
            </Typography>

            <Box
                sx={{
                    marginTop: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px'
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        fontSize: '28px',
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
                    Copiar
                </Button>
            </Box>
            <Typography
                variant="h6"
                wrap='true'
                sx={{
                    fontWeight: 600,
                    fontSize: '14.5px',
                    marginTop: 1
                }}
            >
                COPIA TU LINK PERSONAL Y COMPARTE EN TU RED SOCIAL PARA GANAR DINERO RÁPIDO
            </Typography>

            <Typography variant="h6" sx={{
                fontWeight: 600,
                fontSize: '24px',
                color: 'primary.main',
                marginTop: '40px',
                marginBottom: '16px'
            }}>
                Información personal
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        Nombre de usuario
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '74px',
                    }}>
                        @isixmerces
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '8px'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        Nombre
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '165px',
                    }}>
                        Isabela
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '8px'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        Apellidos
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '152px'
                    }}>
                        Mercedes
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '8px'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        Fecha nacimiento
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '87px'
                    }}>
                        31/12/1969
                    </Typography>
                </Box>
            </Box>

            <Typography variant="h6" sx={{
                fontWeight: 600,
                fontSize: '24px',
                color: 'primary.main',
                marginTop: '44px',
                marginBottom: '16px'
            }}>
                Datos de contacto
            </Typography>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        Email
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '181px'
                    }}>
                        xabex49609@apxby.com
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '8px'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        Teléfono
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '158px'
                    }}>
                        345646454
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '8px'
                    }}
                >
                    <Typography variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                    }}>
                        País
                    </Typography>
                    <Typography noWrap variant="h6" sx={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginLeft: '191px'
                    }}>
                        Colombia
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: '6px 40px',
                        borderRadius: '20px',
                        marginY: '56px',
                        fontWeight: 600,
                        fontSize: '16px',
                    }}
                >
                    Editar
                </Button>
            </Box>
        </Box>
    )
}

export default DataProfile

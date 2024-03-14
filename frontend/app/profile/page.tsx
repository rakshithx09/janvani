import { Box } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

const Profile = () => {
    return (
        <main>
            <Box sx={{
                width: '100%',
                bgcolor: '#e4e6e9',
                margin: 'auto',
                padding: '2rem',
                display: 'flex',/* 
                gap: '1rem' */
            }}>
                <Box sx={{
                    width: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        width: '80%',
                        margin: 'auto'
                    }}>
                        <Avatar alt="Cindy Baker" src="/sampleAvatar.jpg" />
                        <Typography component="div" variant="h5">
                            Varshith Pawar
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        margin: 'auto'
                    }}>
                        <Box sx={{
                            bgcolor: '#969696',
                            borderRadius: '18px',
                            padding: '0.5rem 1rem'
                        }}>
                            <Typography variant='body2'>Ph No: +919108546675</Typography>
                        </Box>

                        <Box sx={{
                            bgcolor: '#969696',
                            borderRadius: '18px',
                            padding: '0.5rem 1rem'
                        }}> <Typography variant='body2'>Pincode: 574150</Typography></Box>
                    </Box>
                    <Box sx={{
                        width: '80%',
                        bgcolor: '#969696',
                        margin: 'auto'

                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga cum eveniet accusantium amet dolorum cupiditate. Quam, necessitatibus libero. Voluptatum doloribus esse culpa qui nam fugit, ipsum enim, repellat minima veniam, totam nihil. Eius veniam debitis vero. Perspiciatis iure veritatis facilis distinctio labore dolor odio impedit quis! Cumque, voluptates nihil?


                    </Box>
                    <Box sx={{
                            bgcolor: '#969696',
                            borderRadius: '18px',
                            padding: '0.5rem 1rem',
                            width:'80%',
                            margin:'auto'
                        }}>
                            <Typography variant='body2'>Occupation</Typography>
                        </Box>
                </Box>
                <Box sx={{
                    width: '50%',
                    borderLeft: '2px solid black',
                    display:'flex',
                    flexDirection:'column',
                }}> <Avatar sx={{/* 
                    bgcolor:'#969696',
                    height:'35%',
                    width:'35%', */
                }} alt="Cindy Baker" src="/map_sheildgold.svg" /></Box>
            </Box>
        </main>
    )
}

export default Profile
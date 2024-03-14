import React from 'react'
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


const Issue = () => {
    return (
        <Card sx={{
            display: 'flex',
            width: '80%',
            margin: 'auto',
            borderRadius: '18px'
        }}
            elevation={5}>
            <CardMedia
                component="img"
                sx={{ width: "50%" }}
                image="/sampleIssue.jpg"
                alt="Live from space album cover"
            />
            <Box sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
            }}>
                <CardContent sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap: '0.5rem'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <Avatar alt="Cindy Baker" src="/sampleAvatar.jpg" />
                        <Typography component="div" variant="h5">
                            Varshith Pawar
                        </Typography>
                    </Box>

                    <Typography variant="body1" color="text.secondary" component="div">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis architecto alias rerum, est provident omnis perspiciatis molestias veniam ducimus deleniti ad beatae? Dolores optio porro quia nesciunt dicta error nam cupiditate doloribus laudantium natus eum maxime quam tempore iusto fugit pariatur quae nihil dolorem laboriosam quisquam, reiciendis cum quaerat!
                    </Typography>
                </CardContent>
            </Box>

        </Card>
    )
}

export default Issue
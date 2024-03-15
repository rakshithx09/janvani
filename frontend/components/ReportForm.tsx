import React from 'react'
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ReportForm = () => {
    return (
        <Card sx={{
            display: 'flex',
            width: '100%',
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
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                }}>
                    
                </CardContent>
            </Box>

        </Card>
    )
}

export default ReportForm
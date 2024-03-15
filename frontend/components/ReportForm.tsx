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
                    <form style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required style={{ marginLeft: '10px' }} />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required style={{ marginLeft: '10px' }} />
                            <small style={{ marginLeft: '10px', display: 'block' }}>Format: 10 digits without spaces or dashes</small>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="landmark">Landmark:</label>
                            <input type="text" id="landmark" name="landmark" required style={{ marginLeft: '10px' }} />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Department:</label><br />
                            <input type="radio" id="department1" name="department" value="department1" required />
                            <label htmlFor="department1" style={{ marginLeft: '10px' }}>Department 1</label><br />
                            <input type="radio" id="department2" name="department" value="department2" />
                            <label htmlFor="department2" style={{ marginLeft: '10px' }}>Department 2</label><br />
                            {/* Add more departments as needed */}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Group:</label><br />
                            <input type="radio" id="group1" name="group" value="group1" required />
                            <label htmlFor="group1" style={{ marginLeft: '10px' }}>Group 1</label><br />
                            <input type="radio" id="group2" name="group" value="group2" />
                            <label htmlFor="group2" style={{ marginLeft: '10px' }}>Group 2</label><br />
                            {/* Add more groups as needed */}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Category:</label><br />
                            <input type="radio" id="category1" name="category" value="category1" required />
                            <label htmlFor="category1" style={{ marginLeft: '10px' }}>Category 1</label><br />
                            <input type="radio" id="category2" name="category" value="category2" />
                            <label htmlFor="category2" style={{ marginLeft: '10px' }}>Category 2</label><br />
                            {/* Add more categories as needed */}
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>Severity:</label><br />
                            <input type="radio" id="severity1" name="severity" value="severity1" required />
                            <label htmlFor="severity1" style={{ marginLeft: '10px' }}>Severity 1</label><br />
                            <input type="radio" id="severity2" name="severity" value="severity2" />
                            <label htmlFor="severity2" style={{ marginLeft: '10px' }}>Severity 2</label><br />
                            {/* Add more severity levels as needed */}
                        </div>
                        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </form>
                </CardContent>
            </Box>

        </Card>
    )
}

export default ReportForm
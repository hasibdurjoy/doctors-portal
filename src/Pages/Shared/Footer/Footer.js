import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1,mt:4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                    <Typography>Footer Content</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
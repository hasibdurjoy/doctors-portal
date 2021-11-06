import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBackground = {
    background: `url('https://i.ibb.co/930CwC9/bg.png')`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBackground}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: "left" }}>
                    <Box>
                        <Typography variant="h3">
                            Your new smile <br /> starts here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, fontWeight: 300, color: "gray" }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum soluta molestiae atque necessitatibus eveniet odit non nesciunt eum possimus nisi fugiat, perspiciatis sapiente porro amet. Numquam, officiis nihil. Tenetur?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5ce7ed" }} >Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src="https://i.ibb.co/1R9pGB8/chair.png" alt="" style={{ width: 400 }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
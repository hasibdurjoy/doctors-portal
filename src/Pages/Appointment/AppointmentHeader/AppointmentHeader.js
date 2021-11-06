import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';

const bannerBackground = {
    background: `url('https://i.ibb.co/930CwC9/bg.png')`,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBackground}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter, textAlign: "left" }}>
                    <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src="https://i.ibb.co/1R9pGB8/chair.png" alt="" style={{ width: 400 }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
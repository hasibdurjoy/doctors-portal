import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url('https://i.ibb.co/T4h0xR5/appointment-bg.png')`,
    backgroundColor: "rgba(45,58,74,0.8)",
    backgroundBlendMode: "darken,luminosity",
    marginTop: "130px"
}
const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={appointmentBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/NmFsg2x/doctor.png" alt="" style={{ width: "400px", marginTop: "-110px"}} />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", textAlign: "left", alignItems: "center" }}>
                    <Box>
                        <Typography
                            variant="h6"
                            style={{ color: "#5ce7ed" }}
                            sx={{ mb: 5 }}
                        >Appointment
                        </Typography>

                        <Typography
                            variant="h4"
                            style={{ color: "white" }}
                            sx={{ mb: 5 }}
                        >Make an Appointment today
                        </Typography>

                        <Typography
                            variant="h6"
                            style={{ color: "white", fontSize: 14, fontWeight: 300 }}
                            sx={{ mb: 5 }}
                        > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptate fugit voluptatum doloremque nisi odio error repudiandae ex, aperiam perspiciatis, expedita architecto nobis culpa nam id beatae, optio molestiae sint!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5ce7ed",marginBottom:"20px" }}>Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
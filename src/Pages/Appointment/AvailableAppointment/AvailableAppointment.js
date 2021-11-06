import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const bookings = [
        {
            id: 1,
            name: "Teeth Orthodontics",
            time: "8:00 AM - 9:00 AM",
            space: 10
        },
        {
            id: 2,
            name: "Cosmetic Dentistry",
            time: "10:20 AM - 11:30 AM",
            space: 10
        },
        {
            id: 3,
            name: "Teeth Cleaning",
            time: "5:00 PM - 6:30 PM",
            space: 9
        },
        {
            id: 4,
            name: "Cavity Protection",
            time: "7:00 AM - 9:00 AM",
            space: 8
        },
        {
            id: 5,
            name: "Pediatric Dental",
            time: "8:00 AM - 9:00 AM",
            space: 5
        },
        {
            id: 6,
            name: "Oral Surgery",
            time: "7:00 PM - 9:00 PM",
            space: 10
        },
    ]


    return (
        <Container>
            <Typography variant="h4" sx={{ py: 3, color: "info.main", fontWeight: 500 }}>Available appointment {date.toDateString()}</Typography>
            {
                bookingSuccess && <><Alert severity="success">
                    <AlertTitle>Successfully booked appointment</AlertTitle>
                </Alert></>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} setBookingSuccess={setBookingSuccess} />)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;
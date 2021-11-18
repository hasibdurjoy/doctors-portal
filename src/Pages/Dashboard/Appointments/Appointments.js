import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = `https://still-eyrie-33913.herokuapp.com/appointments/?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date]);
    console.log(appointments);
    return (
        <div>
            <h1>Appointments {appointments.length} <small>{date.toDateString()}</small> </h1>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Schedule</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="right">{appointment.time}</TableCell>
                                <TableCell align="right">{appointment.serviceName}</TableCell>
                                <TableCell align="right">
                                    {
                                        appointment.payment ? "Paid"
                                            :
                                            <Link to={`/dashboard/pay/${appointment._id}`}>
                                                <Button variant="contained">Pay</Button>
                                            </Link>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Appointments;
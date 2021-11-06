import { Container, Typography, TextField, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("your password didn't match")
        }
        else {
            registerUser(loginData.email, loginData.password, loginData.name, history);
        }
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                    <Typography variant="body1">Register</Typography>
                    {
                        !isLoading && <form onSubmit={handleLogInSubmit}>
                            <TextField
                                required
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                                name="name"
                                type="text"
                                onChange={handleOnChange} />

                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                variant="standard"
                                name="email"
                                type="email"
                                onChange={handleOnChange} />

                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                variant="standard"
                                type="password"
                                name="password"
                                onChange={handleOnChange} />

                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Confirm Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                onChange={handleOnChange} />

                            <Button variant="contained" type="submit" sx={{ width: "75%", m: 1 }}>Register</Button>

                            <NavLink to="/login" style={{ textDecoration: "none" }}> <Button variant="text" type="submit" sx={{ width: "75%", m: 1, textDecoration: "none" }}>Already registered?? please login</Button></NavLink>

                        </form>
                    }
                    {
                        isLoading && <CircularProgress color="success" />
                    }
                    {
                        user?.email && <><Alert severity="success">
                            <AlertTitle>Successfully added user</AlertTitle>
                            Thank you for joining us — <strong>check it out!</strong>
                        </Alert></>
                    }
                    {
                        authError && <Alert severity="error">
                            <AlertTitle>{authError}</AlertTitle>
                        </Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://i.ibb.co/kMwwZmK/login.png" alt="" style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
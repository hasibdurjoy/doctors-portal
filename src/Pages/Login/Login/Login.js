import { Container, Typography, TextField, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, logInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogInSubmit = e => {


        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }

    const signInWithGoogle = () => {
        logInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 5 }}>
                    <Typography variant="body1">Log In</Typography>
                    <form onSubmit={handleLogInSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange} />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            name="password"
                            onChange={handleOnChange} />

                        <Button variant="contained" type="submit" sx={{ width: "75%", m: 1 }}>Log In</Button>



                        <NavLink to="/register" style={{ textDecoration: "none" }}> <Button variant="text" type="submit" sx={{ width: "75%", m: 1, textDecoration: "none" }}>New user? please register</Button></NavLink>

                    </form>
                    <Button onClick={signInWithGoogle} variant="contained" sx={{ width: "75%", m: 1 }}>Log In with google</Button>
                    {
                        isLoading && <CircularProgress color="success" />
                    }
                    {
                        user?.email && <><Alert severity="success">
                            <AlertTitle>Successfully logged in</AlertTitle>
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

export default Login;
import React, { useState } from 'react';
import { TextField, Button, Alert, AlertTitle } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    setEmail('');
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    type="email"
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onBlur={handleOnBlur} />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            {
                success && <><Alert severity="success">
                    <AlertTitle>Successfully logged in</AlertTitle>
                    Thank you for joining us — <strong>check it out!</strong>
                </Alert></>
            }
        </div>
    );
};

export default MakeAdmin;
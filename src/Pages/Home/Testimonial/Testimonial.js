import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonial = () => {

    const comments = [
        {
            id: 1,
            name: "Winson Henry",
            address: "California",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero eum vero soluta est quos dolorum reprehenderit sed quis. Nisi unde id cupiditate harum odio quaerat officia sapiente quia beatae.",
            img: "https://i.ibb.co/s2jM7Wv/people-3.png"
        },
        {
            id: 2,
            name: "Winson Henry",
            address: "California",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero eum vero soluta est quos dolorum reprehenderit sed quis. Nisi unde id cupiditate harum odio quaerat officia sapiente quia beatae.",
            img: "https://i.ibb.co/xfSPnww/people-2.png"
        },
        {
            id: 3,
            name: "Winson Henry",
            address: "California",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero eum vero soluta est quos dolorum reprehenderit sed quis. Nisi unde id cupiditate harum odio quaerat officia sapiente quia beatae.",
            img: "https://i.ibb.co/XJBnVr9/people-1.png"
        },
    ]


    return (
        <Container sx={{ my: 3 }}>
            <Box sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle1">TESTIMONIAL</Typography>
                <Typography variant="h4">What's our patient <br /> says</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        comments.map(comment => <>
                            <Grid item xs={6} md={4}>
                                <Paper elevation={3} sx={{ mx: 3 }}>
                                    <Typography sx={{ margin: 3 }}>{comment.comment} </Typography>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} md={4}>
                                                <img src={comment.img} alt="" />
                                            </Grid>
                                            <Grid item xs={6} md={4}>
                                                <Typography>{comment.name}</Typography>
                                                <Typography>{comment.address}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                        </>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonial;
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const Exceptional = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, my: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src="https://i.ibb.co/Jvvj95G/treatment.png" alt="" width="350" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ marginLeft: "-100px", display: 'flex' ,alignItems:"center"}}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant="h3">
                                Exceptional Dental <br /> care, on Your Terms
                            </Typography>
                            <Typography variant="subtitle1" sx={{ my: 3 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos odio accusantium voluptas nam unde dolorum molestiae. Sequi fugiat at ipsa facere voluptates sapiente quod pariatur quia suscipit possimus. Aut debitis, consequatur ullam id fuga excepturi officiis sequi cumque? Soluta provident accusamus, laudantium obcaecati ut nostrum cum nihil eius corporis possimus?
                            </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Exceptional;
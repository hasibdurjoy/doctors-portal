import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: "Flouride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias deserunt, at veniam facere accusamus et eum fugiat voluptatem odio aut, quos doloremque obcaecati iusto esse maiores placeat, nulla nam incidunt earum corporis libero expedita repellat pariatur. Aliquid modi asperiores quibusdam earum beatae! Suscipit deserunt reprehenderit voluptas, ex quam recusandae?",
        img: "https://i.ibb.co/YLY9L7T/fluoride.png"
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias deserunt, at veniam facere accusamus et eum fugiat voluptatem odio aut, quos doloremque obcaecati iusto esse maiores placeat, nulla nam incidunt earum corporis libero expedita repellat pariatur. Aliquid modi asperiores quibusdam earum beatae! Suscipit deserunt reprehenderit voluptas, ex quam recusandae?",
        img: "https://i.ibb.co/pfqwmVf/cavity.png"
    },
    {
        name: "Teath Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias deserunt, at veniam facere accusamus et eum fugiat voluptatem odio aut, quos doloremque obcaecati iusto esse maiores placeat, nulla nam incidunt earum corporis libero expedita repellat pariatur. Aliquid modi asperiores quibusdam earum beatae! Suscipit deserunt reprehenderit voluptas, ex quam recusandae?",
        img: "https://i.ibb.co/dP8BY50/whitening.png"
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: "success.main", m: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 800, m: 4 }} variant="h4" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/*  {services.map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Service service={service}></Service>
                        </Grid>
                    ))} */}
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
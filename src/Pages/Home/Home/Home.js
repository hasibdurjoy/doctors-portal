import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Exceptional from '../Exceptional/Exceptional';
import Services from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Doctors />
            <Exceptional />
            <AppointmentBanner />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;
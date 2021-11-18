import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwWORJWXTBmkWhZZlCqyhkpmwCq5votzqc6I0ahm8LqBYGGx2dJAupvEs1NCvl3cwmfu7a40bkFFTImk32iVCqI00NQBfXF0Q')
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://still-eyrie-33913.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])

    return (
        <div>
            <h2>Payment for id : {appointmentId}</h2>
            <h2>Payment amount :$ {appointment.price}</h2>
            <h2>Tax amount :$ {appointment.price * 0.1}</h2>
            <h2>Total amount :$ {appointment.price + appointment.price * 0.1}</h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
            </Elements>
        </div>
    );
};

export default Payment;
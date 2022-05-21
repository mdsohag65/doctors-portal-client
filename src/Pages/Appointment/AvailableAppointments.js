import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ date }) => {
    return (
        <section>
            <div className='text-center my-12'>
                <h2 className='text-xl text-secondary font-bold'>Available appointment on:  {format(date, 'PP')}</h2>
            </div>
        </section>
    );
};

export default AvailableAppointments;
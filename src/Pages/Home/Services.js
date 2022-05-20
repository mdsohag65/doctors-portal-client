import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import DentalService from './DentalService';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: "Fluoride Treatment",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
        {
            _id: 2,
            img: cavity,
            name: "Cavity Filling",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
        {
            _id: 3,
            img: whitening,
            name: "Teeth Whitening",
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'

        },
    ]
    return (
        <section className='my-28'>
            <div className='px-12'>
                <div className='text-center'>
                    <h3 className='text-xl text-secondary font-bold'>OUR SERVICES</h3>
                    <h2 className='text-4xl'>Services We Provide</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
            <div className='px-24'>
                <DentalService></DentalService>
            </div>
        </section>
    );
};

export default Services;
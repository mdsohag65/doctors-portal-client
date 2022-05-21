import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <div className='text-center'>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try again another date</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : "space"} available</p>
                </div>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal" className="btn bg-gradient-to-r from-secondary to-primary text-white">BOOK APPOINTMENT
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
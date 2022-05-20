import React from 'react';

const InfoCard = ({ img, cardTitle, details, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='p-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default InfoCard;
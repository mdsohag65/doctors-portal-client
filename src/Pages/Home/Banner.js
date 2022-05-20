import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <section style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn btn-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
import React from 'react';
import './LandingJumbotron.scss';

const LandingJumbotron = () => {
  return (
    <div className='landing_jumbotron'>
      <img
        className='image'
        src='https://res.cloudinary.com/buraiyen/image/upload/v1657481435/All_Elite_Network/aew-dynamite-grand-slam-crowd_r0e4i3.jpg'
        alt='AEW Dynamite stage with fireworks'
      />
      <div className='info'>
        <h1 className='title'>
          The ultimate digital library of <br /> All Elite Wrestling
        </h1>
        <h2 className='subtitle'>
          Get access to over 500 replays of shows, including Pay-Per Views,
          Dynamite, Rampage, and more
        </h2>
      </div>
    </div>
  );
};

export default LandingJumbotron;

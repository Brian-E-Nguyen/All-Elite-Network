import React from 'react';

const Jumbotron = () => {
  const tempImage =
    'https://images.unsplash.com/photo-1524633412778-878453ef0cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return (
    <div className='w-screen h-screen text-center relative'>
      <picture>
        <source srcSet={tempImage} media='(min-width: 600px)' />
        <img
          className='object-cover w-screen min-h-[40%] sm:h-32 md:h-48 lg:h-full '
          src={tempImage}
          lazy-src={tempImage}
          alt=''
          decoding='async'
          rel='preload'
        />
      </picture>
    </div>
  );
};

export default Jumbotron;

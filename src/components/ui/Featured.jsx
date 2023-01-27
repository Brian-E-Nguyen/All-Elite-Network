import React from 'react';

const Featured = () => {
  const tempImage =
    'https://images.unsplash.com/photo-1524633412778-878453ef0cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return (
    <div className='w-screen h-screen relative min-h-screen max-h-[100%]'>
      {/* Info section */}
      <section className='absolute bottom-10 z-10 w-1/2 m-5'>
        <p className='text-xl'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          voluptatum, quae esse eligendi enim repudiandae molestiae! Hic non
          quia dignissimos praesentium iusto porro dolores rem. Quis blanditiis
          facilis id alias.
        </p>
        <div>
          <button>Play</button>
          <button>Info</button>
        </div>
      </section>
      {/* Jumbotron image */}
      <picture>
        <source srcSet={tempImage} media='(min-width: 600px)' />
        <img
          className='relative object-cover w-screen min-h-screen max-h-screen'
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

export default Featured;

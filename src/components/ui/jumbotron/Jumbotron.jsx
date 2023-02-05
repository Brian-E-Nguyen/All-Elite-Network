import React from 'react';

function Jumbotron(props) {
  const jumboImg =
    props.src ||
    'https://images.unsplash.com/photo-1524633412778-878453ef0cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
  return (
    <div className='relative sm:h-[40vh] md:h-[55vh] lg:h-[80vh]'>
      {/* Info section */}
      <section className='absolute bottom-10 z-10 w-1/2 m-5'>
        <h1 className='text-4xl'>{props.title}</h1>
        <p className='text-xl'>{props.description}</p>
        <div>
          <button className='mr-2'>Play</button>
          <button>Info</button>
        </div>
      </section>
      {/* Jumbotron image */}
      <picture>
        <source srcSet={jumboImg} media='(min-width: 600px)' />
        <img
          className='h-full object-cover w-screen brightness-50'
          src={jumboImg}
          lazy-src={jumboImg}
          alt=''
          decoding='async'
          rel='preload'
        />
      </picture>
    </div>
  );
}

export default Jumbotron;

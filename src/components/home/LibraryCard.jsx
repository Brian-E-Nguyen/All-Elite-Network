import React from 'react';

export default function LibraryCard(props) {
  return (
    <div className='relative'>
      <img
        className='relative object-cover rounded-md brightness-50'
        src={props.src}
        loading='lazy'
        alt={props.alt}
      />
      <div className='absolute bottom-0 mx-4'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

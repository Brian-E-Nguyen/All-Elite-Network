import React from 'react';

export default function LibraryCard(props) {
  return (
    <div className='relative hover:cursor-pointer'>
      <img
        className='relative object-cover rounded-md transition duration-300 brightness-50 hover:brightness-75'
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

import React from 'react';

export default function LibraryCard(props) {
  const e =
    'https://images.unsplash.com/photo-1674948936181-2deb7eb82c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  return (
    <div className='relative'>
      <img
        className='relative object-cover rounded-md brightness-50'
        src={e}
        alt=''
      />
      <div className='absolute bottom-0'>
        <h2>All Elite Network</h2>
      </div>
    </div>
  );
}

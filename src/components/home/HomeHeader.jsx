import React from 'react';

export default function HomeHeader() {
  return (
    <section className='relative h-96 text-center bg-slate-500'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div>
          <h1>All Elite Wrestling: Now Available on Demand</h1>
          <p>
            Get access to the extensive All Elite Wrestling digital library,
            including PPV's, Dynamite, Rampage, Dark (Elevation), and more
          </p>
        </div>
      </div>
    </section>
  );
}

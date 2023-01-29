export default function Plans() {
  // TODO: map divs
  return (
    <section>
      {/* Plans */}
      <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
        <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
          Plan
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Standard Plan
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          All-Elite Plan
        </span>
      </div>

      {/* Monthly Price */}
      <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
        <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
          Monthly Price
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          $7.99
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          $9.99
        </span>
      </div>

      {/* Livestream any PPV event  */}
      <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
        <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
          Livestream any PPV event
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Section 2
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Section 3
        </span>
      </div>

      {/* Access TV shows after they air */}
      <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
        <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
          Access TV shows after they air
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Section 2
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Section 3
        </span>
      </div>

      {/* Access to select content from Honor Club */}
      <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
        <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
          Access to select content from Honor Club*
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Section 2
        </span>
        <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
          Section 3
        </span>
      </div>
    </section>
  );
}

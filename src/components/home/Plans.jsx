import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck);

export default function Plans() {
  return (
    <>
      <section className='text-center'>
        <h2>Plans</h2>
        <p>Below are the different plans to suit your needs</p>
      </section>
      <section>
        {/* Plans */}
        <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
          <h3 className='text-xl my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
            Plan
          </h3>
          <h3 className='text-xl my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            Standard Plan
          </h3>
          <h3 className='text-xl my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            All-Elite Plan
          </h3>
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
            <FontAwesomeIcon icon='check' color='#ffe2a5' size='lg' />
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            <FontAwesomeIcon icon='check' color='#ffe2a5' size='lg' />
          </span>
        </div>

        {/* Access TV shows after they air */}
        <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
          <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
            Access TV shows after they air
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            <FontAwesomeIcon icon='check' color='#ffe2a5' size='lg' />
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            <FontAwesomeIcon icon='check' color='#ffe2a5' size='lg' />
          </span>
        </div>

        {/* Advertisements*/}
        <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
          <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
            Advertisements
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            Limited to announcements and future events
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            Toggle on or off
          </span>
        </div>

        {/* Mobile downloads */}
        <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
          <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
            VOD downloads to your mobile device
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            —
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            <FontAwesomeIcon icon='check' color='#ffe2a5' size='lg' />
          </span>
        </div>

        {/* Access to select content from Honor Club */}
        <div className='grid xs:grid-cols-2 grid-cols-3 border-solid border-t-2 border-white-100'>
          <span className='my-3 xs:col-span-2 xs:text-center md:col-span-1 md:text-left'>
            Access to select content from Honor Club*
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            —
          </span>
          <span className='my-3 xs:col-span-1 xs:text-center md:col-span-1 md:text-left'>
            <FontAwesomeIcon icon='check' color='#ffe2a5' size='lg' />
          </span>
        </div>
      </section>

      <section>
        <p>
          * -- Honor Club is a streaming platform for AEW's partner promotion
          Ring of Honor. Subscribers of the All-Elite Plan have access to a
          select number of media included from Honor Club.
        </p>
      </section>
    </>
  );
}

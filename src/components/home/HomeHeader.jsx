import { homeFeaturedData } from '../../data/FeaturedData';
import { Link } from 'react-router-dom';

export default function HomeHeader() {
  return (
    <section className='relative text-center sm:h-[40vh] md:h-[55vh] lg:h-[80vh]'>
      <img
        src={homeFeaturedData.src}
        alt={homeFeaturedData.alt}
        className='h-full object-cover w-screen brightness-50'
      />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div>
          <h1 className='xs:text-sm sm:text-sm md:text-2xl lg:text-4xl'>
            All Elite Wrestling: Now Available on Demand
          </h1>
          <p className='text-lg xs:text-sm font-bold'>
            Welcome to the All-Elite Network. Get access to the extensive All
            Elite Wrestling digital library, including PPV's, Dynamite, Rampage,
            Dark (Elevation), and more
          </p>
          <button className='w-1/2 sm:py-2 md:py-3 lg:py-5 mb-11'>
            Sign Up Now
          </button>
          <p className='font-bold'>
            Already have an account? <Link to='/login'>Login here!</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

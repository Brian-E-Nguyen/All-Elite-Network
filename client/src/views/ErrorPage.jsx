import { homeFeaturedData } from '../data/FeaturedData';

export default function ErrorPage() {
  return (
    <>
      <div
        className='relative bg-cover bg-center h-screen brightness-50'
        style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
      ></div>
      <section className='text-center absolute top-20 left-0 right-0 bottom-0'>
        <h1 className='text-4xl'>404 Error</h1>
        <p className='text-3xl'>
          The page you are trying to visit does not or no longer exists.
        </p>
        <p className='text-3xl'>
          If this is an issue, please contact me at{' '}
          <a href='mailto:brian.edison.nguyen@gmail.com'>
            brian.edison.nguyen@gmail.com
          </a>
        </p>
      </section>
    </>
  );
}

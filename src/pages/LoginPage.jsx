import { homeFeaturedData } from '../data/FeaturedData';

function LoginPage() {
  return (
    <>
      <div
        className='relative bg-cover bg-center h-screen brightness-50'
        style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
      ></div>
      <section className='absolute left-0 top-10 right-0 bottom-0 mx-auto bg-neutral-700 w-[33%] h-[600px] rounded-xl'>
        <div className='container mx-auto mt-5 text-center'>
          <h1>Login</h1>
        </div>
      </section>
    </>
  );
}

export default LoginPage;

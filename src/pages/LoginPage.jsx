import { homeFeaturedData } from '../data/FeaturedData';

function LoginPage() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <div
        className='relative bg-cover bg-center h-screen brightness-50'
        style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
      ></div>
      <section className='absolute left-0 top-10 right-0 bottom-0 mx-auto bg-neutral-900 w-[33%] h-[600px] rounded-xl bg-opacity-80'>
        <form
          onSubmit={submitHandler}
          className='container mx-auto flex flex-col justify-center items-center mt-5 text-center'
        >
          <h1>Login</h1>
          <input
            type='email'
            placeholder='Email'
            class='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
          />
          <input
            type='Password'
            placeholder='Password'
            class='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-4'
          />
          <button>Login</button>
        </form>
      </section>
    </>
  );
}

export default LoginPage;

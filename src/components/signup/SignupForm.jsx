import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function SignupForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  function inputChangeHandler(event) {}

  return (
    <section className='absolute left-0 top-10 right-0 bottom-0 mx-auto bg-neutral-900 w-[33%] h-[600px] rounded-xl bg-opacity-80'>
      <form
        onSubmit={submitHandler}
        className='container mx-auto flex flex-col justify-center items-center mt-5 text-center'
      >
        <h1>Sign Up</h1>
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
          onChange={inputChangeHandler}
        />
        <input
          type='Password'
          placeholder='Password'
          name='password'
          className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-4'
          onChange={inputChangeHandler}
        />
        <button className='w-[70%]'>Login</button>
        <p className='my-4'>
          Already have an account? <Link to='/login'>Login here</Link>
        </p>
        <p>
          <Link to='/'>Go back to home page</Link>
        </p>
      </form>
    </section>
  );
}

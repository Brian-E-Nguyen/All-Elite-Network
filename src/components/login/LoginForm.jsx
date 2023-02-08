import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState('');
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setFormError('Please fill out all information');
    }

    if (
      formData.email === import.meta.env.VITE_ADMIN_USERNAME &&
      formData.password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      return history.push('/featured');
    }
    return history.push('/featured');
  }

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <section className='absolute left-0 top-10 right-0 bottom-0 mx-auto bg-neutral-900 w-[33%] h-[600px] rounded-xl bg-opacity-80'>
      <form
        onSubmit={submitHandler}
        className='container mx-auto flex flex-col justify-center items-center mt-5 text-center'
      >
        <h1>Login</h1>
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
        <p className='text-red-500 font-bold'>{formError}</p>
        <p className='my-4'>
          Not part of the All Elite Network?{' '}
          <Link to='/signup'>Sign up here</Link>
        </p>
        <p>
          <Link to='/'>Go back to home page</Link>
        </p>
      </form>
    </section>
  );
}

export default LoginForm;

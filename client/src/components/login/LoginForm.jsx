import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Cliploader from 'react-spinners/ClipLoader';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    setFormError('');

    if (!formData.email || !formData.password) {
      setFormError('Please fill out all information');
      setIsLoading(false);
      return;
    }

    if (formData.password < 6) {
      setFormError('Password should be least 6 characters');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setFormError(
        'If this is taking a while, please wait a moment. The backend might be booting up'
      );
    }, 3000);

    axios
      .post(`${import.meta.env.VITE_APP_BACKEND_API}/api/auth/login`, formData)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        history.push('/featured');
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        setFormError(errorMessage);
        setIsLoading(false);
      });
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
        data-cy='login-form'
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
        {isLoading ? (
          <Cliploader color='yellow' size={50} data-cy='loading-animation' />
        ) : (
          <button className='w-[70%]' data-cy='submit'>
            Login
          </button>
        )}
        <p className='text-red-500 font-bold mt-4' data-cy='form-error'>
          {formError}
        </p>
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

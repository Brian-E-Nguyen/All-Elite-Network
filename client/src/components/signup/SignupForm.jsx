import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Cliploader from 'react-spinners/ClipLoader';
import axios from 'axios';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypedPassword: '',
    plan: 'standard',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    setFormError('');

    if (!formData.email || !formData.password || !formData.retypedPassword) {
      setIsLoading(false);
      return setFormError('Form is missing information');
    }
    if (formData.password !== formData.retypedPassword) {
      setIsLoading(false);
      return setFormError('Passwords do not match');
    }

    if (formData.password.length < 6) {
      setIsLoading(false);
      return setFormError('Password must be at least 6 characters');
    }
    setTimeout(() => {
      setFormError(
        'If this is taking a while, please wait a moment. The backend might be booting up'
      );
    }, 3000);

    axios
      .post(
        `${import.meta.env.VITE_APP_BACKEND_API}/api/auth/register`,
        formData
      )
      .then(() => {
        history.push('/featured');
      })
      .catch((err) => {
        const errorMessage =
          err.response.data.message || 'An unexpected error happend';
        setFormError(errorMessage);
      });

    // setIsLoading(false);
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
        data-cy='signup-form'
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
          type='password'
          placeholder='Password (6 characters or more)'
          name='password'
          className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
          onChange={inputChangeHandler}
        />
        <input
          type='password'
          placeholder='Retype password'
          name='retypedPassword'
          className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
          onChange={inputChangeHandler}
        />
        <div className='flex items-center mb-4'>
          <input
            id='default-radio-1'
            type='radio'
            value='standard'
            name='plan'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            checked={formData.plan === 'standard'}
            onChange={inputChangeHandler}
          />
          <label
            htmlFor='default-radio-1'
            className='ml-2 text-lg font-medium text-gray-900 dark:text-gray-300'
          >
            Standard Plan
          </label>
        </div>
        <div className='flex items-center'>
          <input
            id='default-radio-2'
            type='radio'
            value='all-elite'
            name='plan'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            checked={formData.plan === 'all-elite'}
            onChange={inputChangeHandler}
          />
          <label
            htmlFor='default-radio-2'
            className='ml-2 text-lg font-medium text-gray-900 dark:text-gray-300'
          >
            All Elite Plan
          </label>
        </div>
        {isLoading ? (
          <Cliploader color='yellow' size={50} data-cy='loading-animation' />
        ) : (
          <button className='w-[70%] my-4' data-cy='submit'>
            Sign Up
          </button>
        )}
        <p className='text-red-500 font-bold'>{formError}</p>
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

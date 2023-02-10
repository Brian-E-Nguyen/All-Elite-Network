import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypedPassword: '',
    plan: 'standard',
  });
  const [formError, setFormError] = useState('');
  const history = useHistory();

  function submitHandler(event) {
    event.preventDefault();
    if (!formData.email || !formData.password || !formData.retypedPassword) {
      return setFormError('Form is missing information');
    }
    if (formData.password !== formData.retypedPassword) {
      return setFormError('Passwords do not match');
    }
    if (formData.password.length < 6) {
      return setFormError('Password must be at least 6 characters');
    }
    axios
      .post('http://localhost:1337/api/auth/register', formData)
      .then(() => {
        history.push('/featured');
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        setFormError(errorMessage);
      });
  }

  function inputChangeHandler(event) {
    const { name, value, type } = event.target;
    setFormData({ ...formData, [name]: value });
  }

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
        <div class='flex items-center mb-4'>
          <input
            id='default-radio-1'
            type='radio'
            value='standard'
            name='plan'
            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            for='default-radio-1'
            class='ml-2 text-lg font-medium text-gray-900 dark:text-gray-300'
          >
            Standard Plan
          </label>
        </div>
        <div class='flex items-center'>
          <input
            checked
            id='default-radio-2'
            type='radio'
            value='all-elite'
            name='plan'
            class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
          <label
            for='default-radio-2'
            class='ml-2 text-lg font-medium text-gray-900 dark:text-gray-300'
          >
            All Elite Plan
          </label>
        </div>
        <button className='w-[70%] my-4'>Login</button>
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

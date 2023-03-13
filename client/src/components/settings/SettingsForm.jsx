import { useEffect, useState } from 'react';
import axios from 'axios';

function SettingsForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    plan: 'standard',
  });

  function submitHandler(event) {
    event.preventDefault();
    if (!formData.email || !formData.password || formData.password.length < 6) {
      // TODO: have an error message
      return;
    }

    axios
      .put(`${import.meta.env.VITE_APP_BACKEND_API}/api/auth/update`, formData)
      .then((res) => {
        console.log('success');
      })
      .catch((err) => {
        console.log('fail');
      });
  }

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        placeholder='email@example.com'
        className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
        onChange={inputChangeHandler}
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        placeholder='Password (must be at least 6 characters)'
        className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
        onChange={inputChangeHandler}
      />
      <label htmlFor='plans'>Plans</label>
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
      <button>Save Changes</button>
    </form>
  );
}

export default SettingsForm;

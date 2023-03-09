import React from 'react';

function SettingsForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        placeholder='email@example.com'
        className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        placeholder='Password (must be at least 6 characters)'
        className='form-input bg-gray-200 w-[70%] rounded-md p-2 text-neutral-100 block bg-neutral-700 my-2'
      />
      <label htmlFor='plans'>Plans</label>
      <div className='flex items-center mb-4'>
        <input
          id='default-radio-1'
          type='radio'
          value='standard'
          name='plan'
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
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

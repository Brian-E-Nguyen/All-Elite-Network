import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypedPassword: '',
  });
  const [formError, setFormError] = useState('');

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
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        const errorMessage = err.response.data.message;
        setFormError(errorMessage);
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

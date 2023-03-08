import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import SignupForm from '../components/signup/SignupForm';
import { homeFeaturedData } from '../data/FeaturedData';
import AnimatedPage from '../components/animations/AnimatedPage';
export default function SignupPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_API}/api/auth/restricted`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.token) {
          history.push('/featured');
        }
      });
  }, []);

  return (
    <AnimatedPage>
      <div
        className='relative bg-cover bg-center h-screen brightness-50'
        style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
      ></div>
      <SignupForm />
    </AnimatedPage>
  );
}

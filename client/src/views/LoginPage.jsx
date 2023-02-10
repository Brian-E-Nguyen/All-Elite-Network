import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import { homeFeaturedData } from '../data/FeaturedData';
import AnimatedPage from '../components/animations/AnimatedPage';

function LoginPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    axios
      .get('http://localhost:1337/api/auth/restricted', {
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
      <LoginForm />
    </AnimatedPage>
  );
}

export default LoginPage;

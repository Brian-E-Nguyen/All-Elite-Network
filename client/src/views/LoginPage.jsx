import LoginForm from '../components/login/LoginForm';
import { homeFeaturedData } from '../data/FeaturedData';
import AnimatedPage from '../components/animations/AnimatedPage';

function LoginPage() {
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

import LoginForm from '../components/login/LoginForm';
import { homeFeaturedData } from '../data/FeaturedData';
function LoginPage() {
  return (
    <>
      <div
        className='relative bg-cover bg-center h-screen brightness-50'
        style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
      ></div>
      <LoginForm />
    </>
  );
}

export default LoginPage;

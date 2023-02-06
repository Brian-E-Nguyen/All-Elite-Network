import { homeFeaturedData } from '../data/FeaturedData';

function LoginPage() {
  return (
    <div
      className='bg-cover bg-center h-screen brightness-50'
      style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
    ></div>
  );
}

export default LoginPage;

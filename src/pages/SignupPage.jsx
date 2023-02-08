import SignupForm from '../components/signup/SignupForm';
import { homeFeaturedData } from '../data/FeaturedData';
export default function SignupPage() {
  return (
    <>
      <div
        className='relative bg-cover bg-center h-screen brightness-50'
        style={{ backgroundImage: `url(${homeFeaturedData.src})` }}
      ></div>
      <SignupForm />
    </>
  );
}

import SignupForm from '../components/signup/SignupForm';
import { homeFeaturedData } from '../data/FeaturedData';
import AnimatedPage from '../components/animations/AnimatedPage';
export default function SignupPage() {
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

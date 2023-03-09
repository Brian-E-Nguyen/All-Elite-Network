import axios from 'axios';
import Navbar from '../components/ui/navbar/Navbar';
import AnimatedPage from '../components/animations/AnimatedPage';

function SettingsPage() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <section>
          <h1>Settings</h1>
          <button className='bg-red-600'>Delete Account</button>
        </section>
      </AnimatedPage>
    </>
  );
}

export default SettingsPage;

import Navbar from '../components/ui/navbar/Navbar';
import AnimatedPage from '../components/animations/AnimatedPage';
import SettingsForm from '../components/settings/SettingsForm';

function SettingsPage() {
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <section className='container mx-auto my-5'>
          <h1>Settings</h1>
          <h2 className='my-5'>Update Account</h2>
          <SettingsForm />
          <hr />
          <h2 className='my-5'>Danger Zone</h2>
          <button className='bg-red-600'>Delete Account</button>
        </section>
      </AnimatedPage>
    </>
  );
}

export default SettingsPage;

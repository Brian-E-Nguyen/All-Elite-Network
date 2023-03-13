import Navbar from '../components/ui/navbar/Navbar';
import AnimatedPage from '../components/animations/AnimatedPage';
import SettingsForm from '../components/settings/SettingsForm';
import { useJwt } from 'react-jwt';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SettingsPage() {
  const token = localStorage.getItem('token');
  const { decodedToken } = useJwt(token);
  const history = useHistory();

  function deleteHandler() {
    const email = decodedToken.email;
    axios
      .delete(`http://localhost:1337/api/auth/${email}`)
      .then(() => {
        localStorage.removeItem('token');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logoutHandler() {
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_API}/api/auth/logout`)
      .then((res) => {
        localStorage.removeItem('token');
        history.push('/');
      })
      .catch((err) => {
        // TODO: handle error
      });
  }
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <section className='container mx-auto my-5'>
          <h1>Settings</h1>
          <h2 className='my-5'>Update Account</h2>
          <SettingsForm />
          <hr className='my-4' />
          <button className='bg-red-400 mr-4' onClick={logoutHandler}>
            Logout
          </button>
          <button className='bg-red-600' onClick={deleteHandler}>
            Delete Account
          </button>
        </section>
      </AnimatedPage>
    </>
  );
}

export default SettingsPage;

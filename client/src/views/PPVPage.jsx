import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import { payperview } from '../data/MediaListData';
import AnimatedPage from '../components/animations/AnimatedPage';

function PPVPage() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${import.meta.env.VITE_APP_BACKEND_API}/api/auth/restricted`, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        // TODO: set success message
      })
      .catch((err) => {
        history.push('/login');
      });
  }, []);

  const jumboImg = payperview[0].imgSrc;
  const jumboTitle = payperview[0].title;
  const jumboDescription = payperview[0].description;

  return (
    <>
      <Navbar />
      <AnimatedPage>
        <Jumbotron
          src={jumboImg}
          title={jumboTitle}
          description={jumboDescription}
        />
        <section className='container mx-auto'>
          <h1 className='text-center'>AEW Pay Per Views</h1>
          <p className='text-xl'>
            Quarterly AEW shows that features the highest quality matches you
            can expect. Championships will be defended, fast-paced action
            ensues, and fueds will end. You're all in for the biggest spectacle
            of matches that AEW has to offer.
          </p>
        </section>
        <MediaCardList shows={payperview} showName='2021-2022' />
      </AnimatedPage>
    </>
  );
}

export default PPVPage;

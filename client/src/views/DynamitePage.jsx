import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import { dynamite } from '../data/MediaListData';
import AnimatedPage from '../components/animations/AnimatedPage';

function DynamitePage() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:1337/api/auth/restricted', {
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

  const jumboImg = dynamite[0].imgSrc;
  const jumboTitle = dynamite[0].title;
  const jumboDescription = dynamite[0].description;
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
          <h1 className='text-center'>AEW Dynamite</h1>
          <p className='text-xl'>
            AEW's flagship weekly show that features the best wrestlers from
            across the world. With its hard-hitting and highly-flighing
            athleticism, unpredictable outcomes, and intense rivalries, Dynamite
            is your go-to weekly program for all things wrestling.
          </p>
        </section>
        <MediaCardList shows={dynamite} showName='2022' />
      </AnimatedPage>
    </>
  );
}

export default DynamitePage;

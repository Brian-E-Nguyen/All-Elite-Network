import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import { dark, darkElevation } from '../data/MediaListData';

function DarkAndDarkElevationPage() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
  }, []);

  const jumboImg = dark[0].imgSrc;
  const jumboTitle = dark[0].title;
  const jumboDescription = dark[0].description;

  return (
    <>
      <Navbar />
      <Jumbotron
        src={jumboImg}
        title={jumboTitle}
        description={jumboDescription}
      />
      <section className='container mx-auto'>
        <h2 className='text-center text-4xl'>AEW Dark</h2>
        <p className='text-xl'>
          AEW Dark features matches before the start of every Dynamite taping.
          Watch your favorite wrestlers battle each other before the start of
          the main event.
        </p>
        <MediaCardList shows={dark} showName='2022' />
      </section>
      <section className='container mx-auto'>
        <h2 className='text-center text-4xl'>AEW Dark Elevation</h2>
        <p className='text-xl'>
          AEW Dark Elevation features the newest and up-and-comming wrestlers.
          Watch them hone their craft as they battle against each other. Any
          wrestler that you see here could possibly be a future champion one
          day.
        </p>
        <MediaCardList shows={darkElevation} showName='2022' />
      </section>
    </>
  );
}

export default DarkAndDarkElevationPage;

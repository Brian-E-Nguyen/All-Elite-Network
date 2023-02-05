import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import { dynamite } from '../data/MediaListData';

function DynamiteView() {
  const jumboImg = dynamite[0].imgSrc;
  const jumboDescription = dynamite[0].description;
  return (
    <>
      <Navbar />
      <Jumbotron src={jumboImg} description={jumboDescription} />
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
    </>
  );
}

export default DynamiteView;

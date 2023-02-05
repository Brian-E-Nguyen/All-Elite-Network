import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import Navbar from '../components/ui/navbar/Navbar';
import {
  payperview,
  dynamite,
  rampage,
  dark,
  darkElevation,
} from '../data/MediaListData';

function FeaturedView() {
  const jumboImg = payperview[0].imgSrc;
  const jumboDescription = payperview[0].description;
  return (
    <>
      <Navbar />
      <Jumbotron src={jumboImg} description={jumboDescription} />
      <MediaCardList shows={payperview} showName='Pay Per View' />
      <MediaCardList shows={dynamite} showName='Dynamite' />
      <MediaCardList shows={rampage} showName='Rampage' />
      <MediaCardList shows={dark} showName='Dark' />
      <MediaCardList shows={darkElevation} showName='Dark Elevation' />
    </>
  );
}

export default FeaturedView;

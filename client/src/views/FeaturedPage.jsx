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

function FeaturedPage() {
  const jumboImg = payperview[0].imgSrc;
  const jumboTitle = payperview[0].title;
  const jumboDescription = payperview[0].description;

  return (
    <>
      <Navbar />
      <Jumbotron
        src={jumboImg}
        title={jumboTitle}
        description={jumboDescription}
      />
      <MediaCardList shows={payperview} showName='Pay Per View' />
      <MediaCardList shows={dynamite} showName='Dynamite' />
      <MediaCardList shows={rampage} showName='Rampage' />
      <MediaCardList shows={dark} showName='Dark' />
      <MediaCardList shows={darkElevation} showName='Dark Elevation' />
    </>
  );
}

export default FeaturedPage;
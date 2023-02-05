import Jumbotron from '../components/ui/jumbotron/Jumbotron';
import MediaCardList from '../components/media/MediaCardList';
import {
  payperview,
  dynamite,
  rampage,
  dark,
  darkElevation,
} from '../data/MediaListData';

function FeaturedView() {
  return (
    <>
      <Jumbotron />
      <MediaCardList shows={payperview} />
      <MediaCardList shows={dynamite} />
      <MediaCardList shows={rampage} />
      <MediaCardList shows={dark} />
      <MediaCardList shows={darkElevation} />
    </>
  );
}

export default FeaturedView;

import { useEffect } from 'react';
import './Featured.scss';
import MediaSlider from '../components/media/MediaSlider';
import {
  payperview,
  dynamite,
  rampage,
  dark,
  darkElevation,
} from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
import { HomePageTitle } from '../helpers/PageTitleData';

const Home = () => {
  useEffect(() => {
    document.title = HomePageTitle;
  }, []);

  const featuredStyles = {
    overflow: 'hidden',
    backgroundColor: '#0b0b0b',
  };

  return (
    <AnimatedPage>
      <div style={featuredStyles}>
        <MediaSlider
          mediaSliderTitle={'Pay-Per View'}
          MediaListData={payperview}
        />
        <MediaSlider mediaSliderTitle={'Dynamite'} MediaListData={dynamite} />
        <MediaSlider mediaSliderTitle={'Rampage'} MediaListData={rampage} />
        <MediaSlider mediaSliderTitle={'Dark'} MediaListData={dark} />

        <MediaSlider
          mediaSliderTitle={'Dark Elevation'}
          MediaListData={darkElevation}
        />
      </div>
    </AnimatedPage>
  );
};

export default Home;

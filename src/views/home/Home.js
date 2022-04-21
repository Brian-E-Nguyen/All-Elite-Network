import './Home.scss';

import MediaSlider from '../../components/media/MediaSlider';
import {
  payperview,
  dynamite,
  rampage,
  dark,
  darkElevation,
} from '../../helpers/MediaListData';
const Home = () => {
  return (
    <div className='home'>
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
  );
};

export default Home;

import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import MediaSlider from '../../components/media/MediaSlider';
import Footer from '../../components/footer/Footer';
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
      <Navbar />
      <Featured />
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
      <Footer />
    </div>
  );
};

export default Home;

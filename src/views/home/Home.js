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
        mediaSliderData={payperview}
      />
      <MediaSlider mediaSliderTitle={'Dynamite'} mediaSliderData={dynamite} />
      <MediaSlider mediaSliderTitle={'Rampage'} mediaSliderData={rampage} />
      <MediaSlider mediaSliderTitle={'Dark'} mediaSliderData={dark} />

      <MediaSlider
        mediaSliderTitle={'Dark Elevation'}
        mediaSliderData={darkElevation}
      />
      <Footer />
    </div>
  );
};

export default Home;

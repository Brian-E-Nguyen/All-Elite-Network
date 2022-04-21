import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import MediaSlider from '../../components/media/MediaSlider';
import Footer from '../../components/footer/Footer';
import { payperview, dynamite } from '../../helpers/MediaListData';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <MediaSlider
        MediaSliderTitle={'Pay-Per View'}
        MediaSliderData={payperview}
      />
      <MediaSlider MediaSliderTitle={'Dynamite'} MediaSliderData={dynamite} />
      {/* <MediaSlider MediaSliderTitle={'Rampage'} />
      <MediaSlider MediaSliderTitle={'Dark'} />
      <MediaSlider MediaSliderTitle={'Dark Elevation'} /> */}
      <Footer />
    </div>
  );
};

export default Home;

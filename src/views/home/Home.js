import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import MediaList from '../../components/media/MediaList';
import Footer from '../../components/footer/Footer';
import { payperview, dynamite } from '../../helpers/MediaListData';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <MediaList mediaListTitle={'Pay-Per View'} mediaListData={payperview} />
      <MediaList mediaListTitle={'Dynamite'} mediaListData={dynamite} />
      {/* <MediaList mediaListTitle={'Rampage'} />
      <MediaList mediaListTitle={'Dark'} />
      <MediaList mediaListTitle={'Dark Elevation'} /> */}
      <Footer />
    </div>
  );
};

export default Home;

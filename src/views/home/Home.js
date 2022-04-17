import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import MediaList from '../../components/media/MediaList';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <MediaList />
    </div>
  );
};

export default Home;

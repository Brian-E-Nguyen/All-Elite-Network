import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img
        src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwrestlingnews.co%2Fwp-content%2Fuploads%2F2022%2F02%2FAEW-Dynamite-stage-arena.png&sp=1649967497T81222fff90001de44768131bc4f8b9eb61d9da9bb289229b2af38d9940cfd5e9'
        className='jumbotron'
        alt=''
      />
    </div>
  );
};

export default Home;

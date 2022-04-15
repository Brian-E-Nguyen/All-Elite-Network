import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <img
        src='https://wrestlingnews.co/wp-content/uploads/2022/02/AEW-Dynamite-stage-arena.png'
        className='jumbotron'
        alt=''
      />
    </div>
  );
};

export default Home;

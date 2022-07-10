import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import './FeaturedSliders.scss';

const Featured = () => {
  return (
    <div className='featured_slider'>
      <img
        src='https://staticg.sportskeeda.com/editor/2022/02/d50fa-16457460219022-1920.jpg'
        className='jumbotron'
        alt=''
      />
      <div className='info'>
        <img src='' alt='' />
        <span className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In porro
          accusamus, totam et nulla numquam qui nisi, minus quod obcaecati
          consequatur eaque nemo. Eos ducimus distinctio tempora id temporibus
          et?
        </span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

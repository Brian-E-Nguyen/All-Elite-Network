import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import './MediaItem.scss';

const MediaItem = () => {
  return (
    <div className='media-item'>
      {/* TODO: props for image */}
      <img
        src='https://staticg.sportskeeda.com/editor/2022/02/d50fa-16457460219022-1920.jpg'
        alt=''
      />
      <div className='info'>
        <div className='icons'>
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className='info__top'>
          <span className='runtime'>4 hours</span>
          <div className='date'>2022</div>
        </div>
        <div className='description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, in!
          Rerum quasi ad nam! Dolorum dolore
        </div>
      </div>
    </div>
  );
};

export default MediaItem;

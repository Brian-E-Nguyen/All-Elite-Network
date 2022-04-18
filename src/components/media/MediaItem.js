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
      </div>
    </div>
  );
};

export default MediaItem;

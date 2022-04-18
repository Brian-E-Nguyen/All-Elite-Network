import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import './MediaItem.scss';

const MediaItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='media-item'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* TODO: props for media data */}
      <img
        src='https://staticg.sportskeeda.com/editor/2022/02/d50fa-16457460219022-1920.jpg'
        alt=''
      />
      <div className='icons'>
        <PlayArrow className='icon' />
        <Add className='icon' />
        <ThumbUpAltOutlined className='icon' />
        <ThumbDownAltOutlined className='icon' />
      </div>
      <div className='info'>
        <span className='runtime'>4 hours</span>
        <span className='date'>2022</span>
        <div className='description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, in!
          Rerum quasi ad nam! Dolorum dolore
        </div>
      </div>
    </div>
  );
};

export default MediaItem;

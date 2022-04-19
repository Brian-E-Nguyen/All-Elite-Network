import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import './MediaItem.scss';

const MediaItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className='media-item'
      style={{
        left: isHovered && props.index * 225 - 50 + props.index * 2.5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.data.imgSrc} alt='' />
      <div className='icons'>
        <PlayArrow className='icon' />
        <Add className='icon' />
        <ThumbUpAltOutlined className='icon' />
        <ThumbDownAltOutlined className='icon' />
      </div>
      <div className='info'>
        <h2>{props.data.title}</h2>
        <h3 className='runtime'>{props.data.runtime}</h3>
        <h3 className='date'>{props.data.date.toLocaleDateString()}</h3>
        <div className='description'>{props.data.description}</div>
      </div>
    </div>
  );
};

export default MediaItem;

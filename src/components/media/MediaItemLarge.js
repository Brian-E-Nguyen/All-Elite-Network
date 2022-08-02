import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';

const MediaItemLarge = (props) => {
  return (
    <div className='media-item-large'>
      <img src={props.data.imgSrc} alt='' />
      <div className='icons'>
        <PlayArrow className='icon' />
        <Add className='icon' />
        <ThumbUpAltOutlined className='icon' />
        <ThumbDownAltOutlined className='icon' />
      </div>
      <div className='info'>
        <h2 className='title'>{props.data.title}</h2>
        <h3 className='runtime'>{props.data.runtime}</h3>
        <h3 className='date'>{props.data.date.toLocaleDateString()}</h3>
        <div className='description'>{props.data.description}</div>
      </div>
    </div>
  );
};

export default MediaItemLarge;

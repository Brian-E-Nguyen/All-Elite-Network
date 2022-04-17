import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import MediaItem from './MediaItem';
import './MediaList.scss';

const List = () => {
  return (
    <div className='media-list'>
      <span className='media-list-title'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined className='slider-arrow left' />
        <div className='container'>
          <MediaItem />
          <MediaItem />
          <MediaItem />
        </div>
        <ArrowForwardIosOutlined className='slider-arrow right' />
      </div>
    </div>
  );
};

export default List;

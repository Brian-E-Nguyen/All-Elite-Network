import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRef, useState } from 'react';
import MediaItem from './MediaItem';
import './MediaList.scss';

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const clickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((previousNumber) => previousNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber((previousNumber) => previousNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className='media-list'>
      <span className='media-list-title'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='slider-arrow left'
          onClick={() => clickHandler('left')}
        />
        <div className='container' ref={listRef}>
          <MediaItem index={0} />
          <MediaItem index={1} />
          <MediaItem index={2} />
          <MediaItem index={3} />
          <MediaItem index={4} />
          <MediaItem index={5} />
          <MediaItem index={6} />
          <MediaItem index={7} />
          <MediaItem index={8} />
          <MediaItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className='slider-arrow right'
          onClick={() => clickHandler('right')}
        />
      </div>
    </div>
  );
};

export default List;

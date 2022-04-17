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
          <MediaItem />
          <MediaItem />
          <MediaItem />
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

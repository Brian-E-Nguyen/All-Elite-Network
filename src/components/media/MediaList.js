import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRef, useState } from 'react';
import MediaItem from './MediaItem';
import './MediaList.scss';

const MediaList = (props) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  // FIXME: delay click handler function runs
  const clickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((previousNumber) => previousNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    // FIXME: slide number dynamic
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber((previousNumber) => previousNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  console.log(props);

  return (
    <div className='media-list'>
      <span className='media-list-title'>{props.mediaListTitle}</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='slider-arrow left'
          onClick={() => clickHandler('left')}
        />
        <div className='container' ref={listRef}>
          {props.mediaListData.map((data, i) => (
            <MediaItem key={i} data={data} index={i} />
            // <h1 key={i}>{i}</h1>
          ))}
        </div>
        <ArrowForwardIosOutlined
          className='slider-arrow right'
          onClick={() => clickHandler('right')}
        />
      </div>
    </div>
  );
};

export default MediaList;

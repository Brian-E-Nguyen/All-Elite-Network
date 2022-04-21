import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRef, useState } from 'react';
import MediaItem from './MediaItem';
import './MediaSlider.scss';

const MediaSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  // FIXME: delay click handler function runs
  const clickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((previousNumber) => previousNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (
      direction === 'right' &&
      slideNumber < props.MediaSliderData.length - 1
    ) {
      setSlideNumber((previousNumber) => previousNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className='media-slider'>
      <span className='media-slider-title'>{props.mediaSliderTitle}</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='slider-arrow left'
          onClick={() => clickHandler('left')}
        />
        <div className='container' ref={listRef}>
          {props.mediaSliderData.map((data, i) => (
            <MediaItem key={i} data={data} index={i} />
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

export default MediaSlider;

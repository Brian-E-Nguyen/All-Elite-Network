import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';

import './MediaList.scss';

const List = () => {
  return (
    <div className='list'>
      <span className='list-title'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined />
        <div className='container'></div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default List;

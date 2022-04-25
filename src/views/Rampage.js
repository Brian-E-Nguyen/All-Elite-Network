import MediaList from '../components/media/MediaList';
import { rampage } from '../helpers/MediaListData';

const Rampage = () => {
  return (
    <>
      <MediaList mediaListData={rampage} />
    </>
  );
};

export default Rampage;

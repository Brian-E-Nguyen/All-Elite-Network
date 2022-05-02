import MediaList from '../components/media/MediaList';
import { rampage } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';

const Rampage = () => {
  return (
    <AnimatedPage>
      <MediaList mediaListData={rampage} />
    </AnimatedPage>
  );
};

export default Rampage;

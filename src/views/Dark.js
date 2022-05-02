import MediaList from '../components/media/MediaList';
import { dark } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';

const Dark = () => {
  return (
    <AnimatedPage>
      <MediaList mediaListData={dark} />
    </AnimatedPage>
  );
};

export default Dark;

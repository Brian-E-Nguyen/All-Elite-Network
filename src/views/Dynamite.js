import MediaList from '../components/media/MediaList';
import { dynamite } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';

const Dynamite = () => {
  return (
    <AnimatedPage>
      <MediaList mediaListData={dynamite} />
    </AnimatedPage>
  );
};

export default Dynamite;

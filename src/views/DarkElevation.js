import MediaList from '../components/media/MediaList';
import { darkElevation } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
const DarkElevation = () => {
  return (
    <AnimatedPage>
      <MediaList mediaListData={darkElevation} />
    </AnimatedPage>
  );
};

export default DarkElevation;

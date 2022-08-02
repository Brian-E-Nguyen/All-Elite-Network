import MediaList from '../components/media/MediaList';
import { rampage } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
import { RampagePageTitle } from '../helpers/PageTitleData';
import { useEffect } from 'react';

const Rampage = () => {
  useEffect(() => {
    document.title = RampagePageTitle;
  }, []);
  return (
    <AnimatedPage>
      <MediaList mediaListData={rampage} />
    </AnimatedPage>
  );
};

export default Rampage;

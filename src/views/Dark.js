import MediaList from '../components/media/MediaList';
import { dark } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
import { DarkPageTitle } from '../helpers/PageTitleData';
import { useEffect } from 'react';

const Dark = () => {
  useEffect(() => {
    document.title = DarkPageTitle;
  });

  return (
    <AnimatedPage>
      <MediaList mediaListData={dark} />
    </AnimatedPage>
  );
};

export default Dark;

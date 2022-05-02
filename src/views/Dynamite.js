import MediaList from '../components/media/MediaList';
import { dynamite } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
import { useEffect } from 'react';
import { DynamitePageTitle } from '../helpers/PageTitleData';

const Dynamite = () => {
  useEffect(() => {
    document.title = DynamitePageTitle;
  });

  return (
    <AnimatedPage>
      <MediaList mediaListData={dynamite} />
    </AnimatedPage>
  );
};

export default Dynamite;

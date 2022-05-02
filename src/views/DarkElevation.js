import MediaList from '../components/media/MediaList';
import { darkElevation } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
import { DarkElevationPageTitle } from '../helpers/PageTitleData';
import { useEffect } from 'react';

const DarkElevation = () => {
  useEffect(() => {
    document.title = DarkElevationPageTitle;
  });

  return (
    <AnimatedPage>
      <MediaList mediaListData={darkElevation} />
    </AnimatedPage>
  );
};

export default DarkElevation;

import React from 'react';
import MediaList from '../components/media/MediaList';
import { payperview } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';
import { useEffect } from 'react';
import { PPVPageTitle } from '../helpers/PageTitleData';
const PPV = () => {
  useEffect(() => {
    document.title = PPVPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <MediaList mediaListData={payperview} />
    </AnimatedPage>
  );
};

export default PPV;

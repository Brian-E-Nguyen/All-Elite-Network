import React from 'react';
import MediaList from '../components/media/MediaList';
import { payperview } from '../helpers/MediaListData';
import AnimatedPage from '../animations/AnimatedPage';

const PPV = () => {
  return (
    <AnimatedPage>
      <MediaList mediaListData={payperview} />
    </AnimatedPage>
  );
};

export default PPV;

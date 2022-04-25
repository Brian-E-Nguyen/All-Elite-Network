import React from 'react';
import MediaList from '../components/media/MediaList';
import { payperview } from '../helpers/MediaListData';
const PPV = () => {
  return (
    <>
      <MediaList mediaListData={payperview} />
    </>
  );
};

export default PPV;

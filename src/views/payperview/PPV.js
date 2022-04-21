import React from 'react';
import MediaList from '../../components/media/MediaList';
import { payperview } from '../../helpers/MediaListData';
const PPV = () => {
  return (
    <div>
      <MediaList mediaListData={payperview} />
    </div>
  );
};

export default PPV;

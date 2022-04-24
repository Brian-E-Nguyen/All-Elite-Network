import React from 'react';
import MediaList from '../components/media/MediaList';
import { dynamite } from '../helpers/MediaListData';
const Dynamite = () => {
  return (
    <>
      <MediaList mediaListData={dynamite} />
    </>
  );
};

export default Dynamite;

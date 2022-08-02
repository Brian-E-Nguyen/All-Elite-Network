import MediaItemLarge from './MediaItemLarge';
const MediaList = (props) => {
  return (
    <div className='media-list'>
      {props.mediaListData.map((data, i) => (
        <MediaItemLarge key={i} data={data} />
      ))}
    </div>
  );
};

export default MediaList;

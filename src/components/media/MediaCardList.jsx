import MediaCard from './MediaCard';

export default function MediaCardList({ shows }) {
  return (
    <div>
      {shows.map((show, i) => (
        <MediaCard show={show} />
      ))}
    </div>
  );
}

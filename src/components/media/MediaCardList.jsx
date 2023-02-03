import MediaCard from './MediaCard';

export default function MediaCardList({ shows }) {
  const gridContainer = [
    'grid',
    'grid-cols-2',
    'gap-4',
    'lg:grid-cols-4',
    'justify-center',
    'mb-32',
    'container',
    'mx-auto',
  ].join(' ');

  return (
    <section className={gridContainer}>
      {shows.map((show, i) => (
        <MediaCard show={show} key={i} />
      ))}
    </section>
  );
}

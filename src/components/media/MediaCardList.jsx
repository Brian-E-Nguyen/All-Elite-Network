import MediaCard from './MediaCard';

export default function MediaCardList(props) {
  const gridContainer = [
    'grid',
    'gap-4',
    'grid-cols-1',
    'items-center',
    'justify-center',
    'md:grid-cols-2',
    'lg:grid-cols-4',
    'mb-32',
    'mx-auto',
    'my-auto',
  ].join(' ');

  const { shows, showName } = props;

  return (
    <section className='container mx-auto'>
      <h2 className='mb-6'>{showName}</h2>
      <div className={gridContainer}>
        {shows.map((show, i) => (
          <MediaCard show={show} key={i} />
        ))}
      </div>
    </section>
  );
}

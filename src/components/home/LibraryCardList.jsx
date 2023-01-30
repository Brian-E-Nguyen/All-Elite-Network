import LibraryCard from './LibraryCard';
import cardData from '../../data/LibraryCardData';

export default function LibraryCardList() {
  const gridContainer = [
    'grid',
    'grid-cols-2',
    'gap-4',
    'lg:grid-cols-4',
    'items-center',
    'justify-center',
    'text-center',
    'mb-32',
  ].join(' ');

  return (
    <section className={gridContainer}>
      {cardData.map((data, i) => (
        <LibraryCard title={data.title} src={data.src} alt={data.alt} key={i} />
      ))}
    </section>
  );
}

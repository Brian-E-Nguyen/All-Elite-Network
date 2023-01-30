import LibraryCard from './LibraryCard';

export default function LibraryCardList() {
  const gridContainer = [
    'grid',
    'grid-cols-2',
    'gap-4',
    'lg:grid-cols-4',
    'items-center',
    'justify-center',
    'text-center',
  ].join(' ');

  return (
    <section className={gridContainer}>
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
      <LibraryCard />
    </section>
  );
}

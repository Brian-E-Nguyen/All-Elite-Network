export default function LibraryCardList() {
  const gridContainer = [
    'grid',
    'grid-cols-4',
    'gap-4',
    'xs:grid-cols-1',
    'sm:grid-cols-2',
    'lg:grid-cols-4',
    'items-center',
    'justify-center',
    'text-center',
  ].join(' ');

  return (
    <section className={gridContainer}>
      <div className='col-span-1'>Column 1</div>
      <div className='col-span-1'>Column 2</div>
      <div className='col-span-1'>Column 3</div>
      <div className='col-span-1'>Column 4</div>
    </section>
  );
}

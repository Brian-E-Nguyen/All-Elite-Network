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
    'container',
    'mx-auto',
  ].join(' ');

  return (
    <section className='bg-neutral-900 py-1'>
      <div className='container sm:w-3/4 md:w-2/3 lg:w-screen mx-auto text-center'>
        <h2 className='text-elite-gold-light text-sm uppercase my-6'>
          Included in all plans
        </h2>
        <span className='text-5xl font-bold'>All The Shows You Love</span>
        <p>Get access to 500(+) hours of AEW's extensive library.</p>
      </div>
      <div className={gridContainer}>
        {cardData.map((data, i) => (
          <LibraryCard
            title={data.title}
            src={data.src}
            alt={data.alt}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

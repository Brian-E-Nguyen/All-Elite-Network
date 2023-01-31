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
    <section className='mt-10'>
      <div className='text-center'>
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

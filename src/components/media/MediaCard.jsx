import { useState } from 'react';

export default function MediaCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    setIsOpen((currentState) => !currentState);
  }

  return (
    <div
      onClick={clickHandler}
      className={
        'w-[300px] h-[160px] mx-6 bg-black px-4 overflow-hidden transition duration-300 ease-in-out hover:cursor-pointer ' +
        (isOpen ? 'h-[400px]' : '')
      }
    >
      <img
        src={props.show.imgSrc}
        alt=''
        className='w-full h-[160px] bg-cover transition duration-300 hover:brightness-50'
      />
      <div className='my-4'>
        <h2 className='text-lg'>{props.show.title}</h2>
        <h3 className='text-sm'>{props.show.runtime}</h3>
        <h3 className='text-sm'>{props.show.date.toLocaleDateString()}</h3>
        <p className='text-sm'>{props.show.description}</p>
      </div>
    </div>
  );
}

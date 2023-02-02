import { useState } from 'react';

export default function MediaCard() {
  const [isOpen, setIsOpen] = useState(false);
  const temp =
    'https://m.media-amazon.com/images/M/MV5BNDUwNjBkMmUtZjM2My00NmM4LTlmOWQtNWE5YTdmN2Y2MTgxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg';

  function clickHandler() {
    setIsOpen((currentState) => !currentState);
  }
  return (
    <div
      onClick={clickHandler}
      className={
        'w-[270px] h-[120px] bg-black px-4 overflow-hidden transition duration-300 ease-in-out hover:cursor-pointer ' +
        (isOpen ? 'h-[290px]' : '')
      }
    >
      <img src={temp} alt='' className='w-full h-[120px] bg-cover' />
      <div className='my-4'>
        <h2 className='text-lg'>Title</h2>
        <h3 className='text-sm'>Runtime</h3>
        <h3 className='text-sm'>Date</h3>
        <p className='text-sm'>Description</p>
      </div>
    </div>
  );
}

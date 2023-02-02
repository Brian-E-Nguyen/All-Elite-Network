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
        'w-[250px] h-[120px] bg-black px-4 overflow-hidden transition duration-300 ease-in-out ' +
        (isOpen ? 'h-64' : '')
      }
    >
      <img src={temp} alt='' className='w-full h-[120px] bg-cover' />
      <div>
        <h2>Title</h2>
        <h3>Runtime</h3>
        <h3>Data</h3>
        <p>Description</p>
      </div>
    </div>
  );
}

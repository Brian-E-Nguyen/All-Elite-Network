import { useState } from 'react';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    'Home',
    'PPV',
    'Dynamite',
    'Rampage',
    'Dark / Dark Elevation',
  ];
  return (
    <nav className='flex items-center justify-between bg-yellow-700 py-9'>
      <div className='mx-12'>
        <img src='' alt='AEW Logo' />
      </div>
      <div className='hidden md:block'>
        <ul>
          {navLinks.map((link, i) => (
            <li className='inline mx-4 text-lg font-bold' key={i}>
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div className='mr-12 flex md:hidden'>
        <button
          onClick={() => setIsOpen((currentState) => !currentState)}
          type='button'
          className='bg-yellow-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          {!isOpen ? (
            <svg
              className='block h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              className='block h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
      </div>
      <div className='md:hidden'>
        {isOpen && (
          <ul className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link, i) => (
              <li className='inline mx-4 text-lg font-bold' key={i}>
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

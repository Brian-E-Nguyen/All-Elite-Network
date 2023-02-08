function NavbarMobileButtonInactive() {
  return (
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
  );
}

function NavbarMobileButtonActive() {
  return (
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
  );
}

export default function NavbarMobileButton(props) {
  return (
    <button
      onClick={() => props.setIsOpen((currentState) => !currentState)}
      type='button'
      className='bg-yellow-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
      aria-controls='mobile-menu'
      aria-expanded='false'
    >
      <span className='sr-only'>Open main menu</span>
      {!props.isOpen ? (
        <NavbarMobileButtonInactive />
      ) : (
        <NavbarMobileButtonActive />
      )}
    </button>
  );
}

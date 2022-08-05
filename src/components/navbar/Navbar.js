import React, { useState } from 'react';
import {
  Search,
  Notifications,
  ArrowDropDown,
  Menu,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../router/Routes';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInMobileMenu, setIsInMobileMenu] = useState(false);
  const [isDropdownMenuShown, setIsDropdownMenuShown] = useState(false);

  const buttonClickHandler = () => {
    setIsInMobileMenu((prevState) => !prevState);
  };

  const dropdowmMenuHandler = () => {
    setIsDropdownMenuShown((prevState) => !prevState);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  window.onresize = () => {
    if (window.innerWidth >= 992) {
      setIsInMobileMenu(false);
    }
  };
  return (
    <nav className='container-fluid bg-gray-900 text-white w-full top-0 py-3 fixed z-10'>
      <div
        className='flex flex-nowrap  items-center justify-between h-16 w-full py-3 px-4
                      xs:flex-row-reverse
                      md:flex-row'
      >
        {/* Left */}
        <div
          className={`${
            isInMobileMenu ? 'flex bg-gray-900' : 'hidden'
          } pb-5 translate-x-5 flex-col transform  
              xs:text-right xs:absolute xs:top-1/2 xs:left-0 xs:transform xs:-translate-x-2 xs:translate-y-8 xs:w-full
              md:flex md:relative md:flex-row md:top-0 md:left-0 md:transform md:-translate-x-0 md:translate-y-3 md:text-left md:bg-none`}
        >
          {ROUTES.map((route) => (
            <span key={route.key}>
              <NavLink
                exact
                className='transition-all duration-300 
                          cursor-pointer 
                          uppercase mx-3 font-bold 
                          hover:text-eliteGold
                          xs:text-2xl
                          md:text-lg '
                activeClassName={'text-eliteGold'}
                to={route.path}
                onClick={buttonClickHandler}
              >
                {route.title}
              </NavLink>
            </span>
          ))}
        </div>
        {/* Right */}
        <div className='flex justify-items-end'>
          <Search />
          <Notifications />
          <div
            id='dropdown-button'
            className='group'
            onMouseEnter={dropdowmMenuHandler}
            onMouseLeave={dropdowmMenuHandler}
          >
            <ArrowDropDown />
            <div
              className='bg-gray-800 px-3 py-1 rounded-md flex flex-col absolute right-0 -translate-x-3 invisible group-hover:visible'
              onMouseEnter={dropdowmMenuHandler}
              onMouseLeave={dropdowmMenuHandler}
            >
              <span className=' hover:cursor-pointer hover:text-eliteGold'>
                Settings
              </span>
              <span className='hover:cursor-pointer hover:text-eliteGold'>
                Logout
              </span>
            </div>
          </div>
          <Menu
            className='flex xs:visible md:invisible'
            onClick={buttonClickHandler}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

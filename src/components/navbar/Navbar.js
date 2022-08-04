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
    <nav className='container-fluid bg-red-500 text-white w-full top-0  fixed z-10'>
      <div
        className='flex flex-nowrap  items-center justify-between h-16 w-full py-3 px-4
                      xs:flex-row-reverse
                      md:flex-row'
      >
        {/* Left */}
        <div
          className='flex pb-5 translate-x-5 flex-col transform 
                        xs:text-left xs:absolute xs:top-1/2 xs:left-0 xs:transform  xs:translate-y-8
                        md:relative md:flex-row md:top-0 md:left-0 md:transform md:-translate-x-0 md:translate-y-3'
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
        <div className='flex justify-items-end  border-solid border-4 border-red-100'>
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
              className='bg-gray-900 flex flex-col absolute right-0 invisible group-hover:visible'
              onMouseEnter={dropdowmMenuHandler}
              onMouseLeave={dropdowmMenuHandler}
            >
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
          <Menu className='flex xs:visible md:invisible' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

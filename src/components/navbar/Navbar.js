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
    <nav className="container-fluid bg-red-500 text-white w-full top-0  fixed z-10">
      <div className=" flex flex-nowrap items-center justify-between h-16  w-full flex-row py-3 px-4">
        {/* Left */}
        <div className="inline-flex pb-5 absolute top-0 translate-x-5 translate-y-5 flex-col text-left">
          {ROUTES.map((route) => (
            <span key={route.key}>
              <NavLink
                exact
                className="transition-all duration-300 
                          cursor-pointer 
                          uppercase mx-3 font-bold 
                          hover:text-eliteGold
                          xs:text-3xl "
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
        <div className="flex items-center border-solid border-4 border-red-100">
          <Search className="xs:invisible lg:visible" />
          <Notifications className="xs:invisible lg:visible" />
          <div
            id="dropdown-button"
            className="group"
            onMouseEnter={dropdowmMenuHandler}
            onMouseLeave={dropdowmMenuHandler}
          >
            <ArrowDropDown />
            <div
              className="bg-gray-900 flex flex-col absolute right-0 invisible group-hover:visible"
              onMouseEnter={dropdowmMenuHandler}
              onMouseLeave={dropdowmMenuHandler}
            >
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
          <Menu className="flex xs:visible lg:invisible" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

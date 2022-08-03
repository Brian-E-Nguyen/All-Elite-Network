import React, { useState } from 'react';
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
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
    <nav className=" bg-red-500 text-white w-full top-0 fixed z-10">
      <div className="flex items-center justify-between h-16 flex-row py-3">
        {/* Left */}
        <div className="flex items-center">
          {ROUTES.map((route) => (
            <span key={route.key}>
              <NavLink
                exact
                className="transition-all duration-300 cursor-pointer uppercase mx-3 font-bold hover:text-eliteGold"
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
        <div className="flex items-center">
          <Search />
          <Notifications />
          <div
            id="dropdown-button"
            className="group"
            onMouseEnter={dropdowmMenuHandler}
            onMouseLeave={dropdowmMenuHandler}
          >
            <ArrowDropDown />
            <div
              className="invisible group-hover:visible"
              onMouseEnter={dropdowmMenuHandler}
              onMouseLeave={dropdowmMenuHandler}
            >
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

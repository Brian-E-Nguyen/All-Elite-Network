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
    <nav className="bg-black">
      <div className={isInMobileMenu ? 'navlinks mobile' : 'navlinks'}>
        {ROUTES.map((route) => (
          <span key={route.key}>
            <NavLink
              exact
              className="transition-all duration-300 text-xl text-white uppercase mx-3 font-bold hover:text-eliteGold"
              activeClassName={'text-eliteGold'}
              to={route.path}
              onClick={buttonClickHandler}
            >
              {route.title}
            </NavLink>
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

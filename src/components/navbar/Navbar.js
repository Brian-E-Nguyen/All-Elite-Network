import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import ROUTES from '../../router/Routes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInMobileMenu, setIsInMobileMenu] = useState(false);
  const [isDropdownMenuShown, setIsDropdownMenuShown] = useState(false);

  const buttonClickHandler = () => {
    setIsInMobileMenu((prevState) => !prevState);
    console.log(isInMobileMenu);
  };

  const dropdowmMenuHandler = () => {
    setIsDropdownMenuShown((prevState) => !prevState);
    console.log(isDropdownMenuShown);
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
    <div
      className={isScrolled || isInMobileMenu ? 'navbar scrolled' : 'navbar'}
    >
      <div className='container'>
        <div className='left'>
          <NavLink to='/'>
            <img
              src='https://upload.wikimedia.org/wikipedia/en/6/6d/All_Elite_Wrestling.jpg'
              alt='All Elite Wrestling logo'
            />
          </NavLink>

          <div className={isInMobileMenu ? 'navlinks mobile' : 'navlinks'}>
            {ROUTES.map((route) => (
              <span key={route.key}>
                <NavLink
                  exact
                  className='navlink'
                  activeClassName={'navlink active'}
                  to={route.path}
                  onClick={buttonClickHandler}
                >
                  {route.title}
                </NavLink>
              </span>
            ))}
          </div>
        </div>
        <div className='right'>
          <Search />
          <Notifications />
          <div
            id='dropdown-button'
            onMouseEnter={dropdowmMenuHandler}
            onMouseLeave={dropdowmMenuHandler}
          >
            <ArrowDropDown />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>{' '}
          </div>
          <div
            className={isInMobileMenu ? 'burger-btn active' : 'burger-btn'}
            onClick={buttonClickHandler}
          >
            <div className='burger-btn__line'></div>
            <div className='burger-btn__line'></div>
            <div className='burger-btn__line'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

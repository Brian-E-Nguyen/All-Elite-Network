import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import ROUTES from '../../router/Routes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <NavLink to='/'>
            <img
              src='https://upload.wikimedia.org/wikipedia/en/6/6d/All_Elite_Wrestling.jpg'
              alt='All Elite Wrestling logo'
            />
          </NavLink>
          <div>
            {ROUTES.map((route) => (
              <span key={route.key}>
                <NavLink
                  exact
                  className='navlink'
                  activeClassName={'navlink active'}
                  to={route.path}
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
          <ArrowDropDown />
          <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

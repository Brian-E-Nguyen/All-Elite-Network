import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const links = [
    {
      linkTitle: 'Featured',
      linkPath: '/',
    },
    {
      linkTitle: 'Pay-Per View',
      linkPath: '/payperview',
    },
    {
      linkTitle: 'Dynamite',
      linkPath: '/dynamite',
    },
    {
      linkTitle: 'Rampage',
      linkPath: '/rampage',
    },
    {
      linkTitle: 'Dark',
      linkPath: '/dark',
    },
    {
      linkTitle: 'Dark Elevation',
      linkPath: '/dark-elevation',
    },
  ];
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/6/6d/All_Elite_Wrestling.jpg'
            alt='All Elite Wrestling logo'
          />
          <div>
            {links.map((link, i) => (
              <span key={i}>
                <NavLink to={link.linkPath}>{link.linkTitle}</NavLink>
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

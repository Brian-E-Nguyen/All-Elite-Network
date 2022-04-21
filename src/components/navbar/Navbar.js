import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/6/6d/All_Elite_Wrestling.jpg'
            alt='All Elite Wrestling logo'
          />
          <span>Featured</span>
          <span>Pay-Per View</span>
          <span>Dynamite</span>
          <span>Rampage</span>
          <span>Dark</span>
          <span>Dark Elevation</span>
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

import { Search, Notifications, ArrowDropDown } from '@mui/icons-material';
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

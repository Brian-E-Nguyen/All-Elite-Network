import ROUTES from '../../router/Routes';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/6/6d/All_Elite_Wrestling.jpg'
          alt='All Elite Wrestling logo'
        />
        <div className='links'>
          {ROUTES.map((route) => (
            <span key={route.key}>
              <NavLink
                exact
                className='navlink'
                activeClassName='navlink active'
                to={route.path}
              >
                {route.title}
              </NavLink>
            </span>
          ))}
        </div>
        <div className='disclaimer'>
          This is a fan-made site and is in no way affiliated with All Elite
          Wrestling. All rights go to their respective owners.
        </div>
      </div>
    </div>
  );
};

export default Footer;

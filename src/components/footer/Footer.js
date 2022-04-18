import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <img
          src='https://upload.wikimedia.org/wikipedia/en/6/6d/All_Elite_Wrestling.jpg'
          alt='All Elite Wrestling logo'
        />
        <div className='links'>
          <span>Featured</span>
          <span>Pay-Per View</span>
          <span>Dynamite</span>
          <span>Rampage</span>
          <span>Dark</span>
          <span>Dark Elevation</span>
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

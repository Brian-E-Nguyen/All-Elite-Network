import React from 'react';

export default function MediaCard() {
  const temp =
    'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fshowmax.akamaized.net%2Fi%2F12cdc789-bff1-47db-9f18-622c8565fa33%2Fformat%3Dwebp%2Fq%3D70%2F850x&sp=1675289558T8a3bc6a6c151a3e46bf20dbd1831a85f6485536ace5afa39444d88a542c430ae';
  return (
    <div>
      <img src={temp} alt='' />
    </div>
  );
}

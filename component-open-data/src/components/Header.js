import React from 'react';

const Header = ({ image, title }) => {
  return (
    <header>
      <img src={image} alt="Logo" style={{ width: '50px', height: '50px' }} />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

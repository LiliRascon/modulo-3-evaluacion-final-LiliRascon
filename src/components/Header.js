import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <div className="page__header">
      <img className="img-logo" src={logo} alt="logo" />

    </div>
  );
};

export default Header;
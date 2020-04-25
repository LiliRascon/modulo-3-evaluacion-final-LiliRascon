import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';
import  Youtube  from '../components/Youtube';
const Header = () => {
  return (
    <div className="page__header">
     
      <img className="img-logo" src={logo} alt="logo" />
      <Youtube />
    </div>
  );
};

export default Header;
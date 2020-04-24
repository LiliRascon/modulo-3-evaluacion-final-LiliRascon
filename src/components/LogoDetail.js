import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/LogoDetail.scss';

const LogoDetail = () => {
  return (
    <div className="page__logo">
      <img className="img-logo" src={logo} alt="logo" />

    </div>
  );
};

export default LogoDetail;
import React from 'react';
import { Outlet } from 'react-router-dom';
import './AuthLayout.scss'
import { STATIC_URL } from '../../../constants/core';

const AuthLayout: React.FC = () => {
  return (
    <div>
      <div className='auth-header'>
        <a className='auth-logo' href='/'>
          <img src={`${STATIC_URL}/logo.svg`} alt='logo'/>
        </a>
      </div>
      <Outlet/>
    </div>
  );
};

export default AuthLayout;

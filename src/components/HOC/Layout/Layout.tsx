import { Outlet } from 'react-router-dom'
import React from 'react';

import './Layout.scss';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

const Layout: React.FC = () => {
  return (
    <div className='layout-wrapper'>
      <Header />
      <div className='outlet-wrapper'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

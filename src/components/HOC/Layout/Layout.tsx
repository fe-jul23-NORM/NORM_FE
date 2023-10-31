import { Outlet } from 'react-router-dom'
import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Layout.scss';

const Layout:React.FC = () => {
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

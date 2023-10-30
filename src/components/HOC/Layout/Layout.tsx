import { Outlet } from 'react-router-dom'
import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Layout:React.FC = () => {
  return (
    <>
      <Header />
        <div className='ingridientsContainer'>
          <Outlet />
        </div>
      <Footer />
    </>
  );
}

export default Layout;
import { Outlet } from 'react-router-dom'
import React from 'react';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const Layout:React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
import React from 'react';

import './NotFoundPage.scss';
import { STATIC_URL } from '../../../constants/core';

const NotFoundPage: React.FC = () => {
  return (
    <div className='container_notFoundPage'>
      <img
        className='imageNotFoundPage'
        src={`${STATIC_URL}/notFaund/not_found.jpg`}
        alt='error 404'
      />
      <p className='notFoundPageTitle'>Page not Found</p>
    </div>
  )
};

export default NotFoundPage;

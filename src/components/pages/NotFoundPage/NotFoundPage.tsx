import React from 'react';

import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
    return (
        <div className='container_notFoundPage'>
          <img className='imageNotFoundPage' src='https://i.imgur.com/nRYqhC5.jpg' alt='error 404' />
          <p className='notFoundPageTitle'>Page not Found</p>
        </div>
    )
};

export default NotFoundPage;

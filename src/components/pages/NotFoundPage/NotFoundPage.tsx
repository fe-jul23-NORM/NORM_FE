import './NotFoundPage.scss';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className='container'>
          <img src='https://i.imgur.com/nRYqhC5.jpg' alt='error 404' />
          <p className='notFoundPageTitle'>Page not Found</p>
        </div>
    )
};

export default NotFoundPage;

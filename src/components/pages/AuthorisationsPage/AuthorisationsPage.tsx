import React from 'react';
import './AuthorisationsPage.scss';
import Input from '../../Input/Input';
import ButtonCart from '../../ButtonCart/ButtonCart';


const AuthorisationsPage: React.FC = () => {
 
  return (    
    <div className='authorisations__page'>
      <div className="authorisations__page-mobile-wrapper">
        <div className="mobile-container">
          <div className="content">
            <Input />

            <ButtonCart />
          </div>
        </div>
      </div>

      <div className="authorisations__page-right-side">
        <img src="/images/iphone-15-release.png"
          className="right-side__img"
        />
      </div>
    </div>
  )
}

export default AuthorisationsPage;

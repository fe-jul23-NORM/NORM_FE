import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'nav__link',
  { 'nav__link--active': isActive },
);

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="header__logo">
          <a href="/">
            <img src={logo} alt="nice-gadgets-logo" />
          </a>
        </div>
        
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/" className="nav__link">Home</a>
          </li>

          <li className="nav__item">
            <a href="/phones" className="nav__link">Phones</a>
          </li>

          <li className="nav__item">
            <a href="/tablets" className="nav__link">Tablets</a>
          </li>

          <li className="nav__item">
            <a href="/accessories" className="nav__link">Accessories</a>
          </li>
        </ul>
      </nav>

      <div className='header__icons'>
        <a href="/favourites" className='icon icon--heart'> </a>
        <a href="/cart" className='icon icon--cart'> </a>
        <a href="/menu" className='icon icon--menu'> </a>
      </div>
    </header>
  )
};

export default Header;

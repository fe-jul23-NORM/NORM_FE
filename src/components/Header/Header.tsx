import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'nav__link',
  { 'nav__link--active': isActive },
);

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink
          className='header__logo'
          to="/"
        />

        <div className="nav__list">
        <NavLink
          className={getLinkClass}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={getLinkClass}
          to="/phones"
        >
          Phones
        </NavLink>

        <NavLink
          className={getLinkClass}
          to="/tablets"
        >
          Tablets
        </NavLink>

        <NavLink
          className={getLinkClass}
          to="/accessories"
        >
          Accessories
        </NavLink>
        </div>
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

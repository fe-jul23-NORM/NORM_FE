import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'nav__link',
  { 'nav__link--active': isActive },
);

const getFavoritesClass = ({ isActive }: { isActive: boolean }) => classNames(
  'icon icon--heart',
  { 'icon--active': isActive },
);

const getCartClass = ({ isActive }: { isActive: boolean }) => classNames(
  'icon icon--cart',
  { 'icon--active': isActive },
);

const Header: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => {
    setIsMenuVisible(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    setIsMenuVisible(false);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  }

  return (
    <>
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
          <NavLink
            className={getFavoritesClass}
            to="/favourites"
          />

          <NavLink
            className={getCartClass}
            to="/cart"
          />

          <a
            href="*"
            className={classNames('icon', { 'icon--menu': !isMenuVisible, 'icon--close': isMenuVisible })}
            onClick={(e) => {
              e.preventDefault()
              isMenuVisible ? closeMenu() : openMenu()
            }}
          > </a>
        </div>
      </header>

      {isMenuVisible
        && <BurgerMenu setIsMenuVisible={setIsMenuVisible} />}
    </>
  )
};

export default Header;

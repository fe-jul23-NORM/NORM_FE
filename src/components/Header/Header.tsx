import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useAppSelector } from '../../store';
import { selectUser } from '../../store/auth/selectors';
import { HEADER_LINKS } from '../../constants/core';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'nav__link',
  { 'nav__link--active': isActive },
);

const getIconClass = (isActive: boolean, icon: string) => {
  return classNames(
    'icon',
    'icon--nav',
    { 'icon--active': isActive },
    icon,
  )
};

const Header: React.FC = () => {
  const user = useAppSelector(selectUser);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    if (isMenuVisible) {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
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
            
            {HEADER_LINKS.map((link) => {
              return (
                <NavLink
                  key={link}
                  className={getLinkClass}
                  to={`/${link.toLowerCase()}`}
                >
                  {link}
                </NavLink>
              )
            })}
            
          </div>
        </nav>

        <div className='header__icons'>
          
          <NavLink
            className={({ isActive }) => getIconClass(isActive, 'icon-user')}
            to={user ? '/orders' : '/login'}
          />
          
          <NavLink
            className={({ isActive }) => getIconClass(isActive, 'icon-heart')}
            to='/favourites'
          />
          
          <NavLink
            className={({ isActive }) => getIconClass(isActive, 'icon-cart')}
            to='/cart'
          />

          <span
            className={classNames('icon', { 'icon--menu': !isMenuVisible, 'icon-close': isMenuVisible })}
            onClick={toggleMenu}
          />
        </div>
      </header>

      {isMenuVisible
        && <BurgerMenu setIsMenuVisible={toggleMenu} />}
    </>
  )
};

export default Header;

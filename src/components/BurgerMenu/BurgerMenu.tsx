import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import { useAppSelector } from '../../store';
import { selectUser } from '../../store/auth/selectors';
import { HEADER_LINKS } from '../../constants/core';
import classNames from 'classnames';

type Props = {
  setIsMenuVisible: () => void;
}

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'menu__link',
  { 'menu__link--active': isActive },
);

export const BurgerMenu: React.FC<Props> = ({ setIsMenuVisible }) => {
  const user = useAppSelector(selectUser);
  
  return (
    <div className='menu'>
      <div className="menu__navigation">
        <NavLink
          className={getLinkClass}
          to="/"
          onClick={setIsMenuVisible}
        >
          Home
        </NavLink>
        
        {HEADER_LINKS.map((link) => {
          return (
            <NavLink
              key={link}
              className={getLinkClass}
              to={`/${link.toLowerCase()}`}
              onClick={setIsMenuVisible}
            >
              {link}
            </NavLink>
          )
        })}
      </div>

      <div className='menu__icons'>
        <a href="/favourites" className='menu__icon icon-heart' />
        <a href={user ? '/orders' : '/login'} className='icon-user menu__icon icon-user'/>
        <a href="/cart" className='menu__icon icon-cart'/>
      </div>
    </div>
  )
};

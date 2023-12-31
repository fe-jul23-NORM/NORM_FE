import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import { selectUser } from '../../store/auth/selectors';
import { HEADER_LINKS, STATIC_URL } from '../../constants/core';
import { CartProduct } from '../../types/product.types';
import { useAppDispatch, useAppSelector } from '../../store';
import { getTotalQuantity } from '../../store/cart/slice';
import { GlobalSearch } from '../GlobalSearch';
import { BurgerMenu } from '../BurgerMenu';
import { selectFavorites } from '../../store/products/selectors';

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

export const Header: React.FC = () => {
  const user = useAppSelector(selectUser);
  const favourites = useAppSelector(selectFavorites);
  const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // need to check

  const numberOfProducts = useAppSelector(state => state.cart.totalQuantity);
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalQuantity());
  }, []);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/">
            <img
              className="header__logo"
              src={`${STATIC_URL}/logo.svg`}
              alt="NICE GAGETS logo" />
          </NavLink>

          <div className="nav__list">
            <NavLink
              className={getLinkClass}
              to="/"
            >
              Home
            </NavLink>
            {HEADER_LINKS.map((link) => {
              const normalizedLink = `${link.toLowerCase()}?sort=age&itemsOnPage=8`;
              return (
                <NavLink
                  key={link}
                  className={getLinkClass}
                  to={`/${normalizedLink}`}
                >
                  {link}
                </NavLink>
              )
            })}
          </div>
        </nav>
        <div className='header__icons'>
          <GlobalSearch />
          <NavLink
            className={({ isActive }) => getIconClass(isActive, 'icon-user')}
            to={user ? '/orders' : '/login'}
          />
          <div className={classNames({ 'number': favourites.length > 0 })}>
            <div className={favourites.length ? 'number--active' : 'number--disabled'}>{favourites.length}</div>
            <NavLink
              className={({ isActive }) => getIconClass(isActive, 'icon-heart')}
              to='/favourites'
            />
          </div>

          <div className={classNames({ 'number': cart.length > 0 })}>
            <div className={cart.length ? 'number--active' : 'number--disabled'}>{numberOfProducts}</div>
            <NavLink
              className={({ isActive }) => getIconClass(isActive, 'icon-cart')}
              to="/cart"
            />
          </div>

          <span
            className={classNames('icon', 'icon-close-button', { 'icon--menu': !isMenuVisible, 'icon-close': isMenuVisible })}
            onClick={toggleMenu}
          />
        </div>
      </header>
      {isMenuVisible
        && <BurgerMenu setIsMenuVisible={toggleMenu} />}
    </>
  )
};

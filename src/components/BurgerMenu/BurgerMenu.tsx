import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';

type Props = {
  setIsMenuVisible: (isVisibile: boolean) => void;
}

const BurgerMenu: React.FC<Props> = ({ setIsMenuVisible }) => {
  return (
    <div className='menu'>
      <div className="menu__navigation">
        <NavLink
          className="menu__link"
          to="/"
          onClick={() => setIsMenuVisible(false)}
        >
          Home
        </NavLink>

        <NavLink
          className="menu__link"
          to="/phones"
          onClick={() => setIsMenuVisible(false)}
        >
          Phones
        </NavLink>

        <NavLink
          className="menu__link"
          to="/tablets"
          onClick={() => setIsMenuVisible(false)}
        >
          Tablets
        </NavLink>

        <NavLink
          className="menu__link"
          to="/accessories"
          onClick={() => setIsMenuVisible(false)}
        >
          Accessories
        </NavLink>
      </div>

      <div className='menu__icons'>
        <a href="/favourites" className='menu__icon menu__icon--heart'> </a>
        <a href="/cart" className='menu__icon menu__icon--cart'> </a>
      </div>
    </div>
  )
};

export default BurgerMenu;

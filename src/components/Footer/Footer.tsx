import React from 'react';
import './Footer.scss';
import { scrollToTop } from '../../utils/constants';
import { STATIC_URL } from '../../constants/core';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <img
          className="footer__logo"
          src={`${STATIC_URL}/logo.svg`}
          alt="NICE GAGETS logo" />

        <div className="footer__nav">
          <div className="nav__links">
            <NavLink
              className="footer__link"
              to="https://github.com/fe-jul23-NORM"
              target='blank'
            >
              Github
            </NavLink>

            <NavLink
              className="footer__link"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="footer__link"
              to="/rights"
            >
              Rights
            </NavLink>
          </div>
        </div>

        <button
          type="button"
          className="button__scroll"
          onClick={scrollToTop}
        >
          <p className='button_scroll--text'>Back to top</p>
          <span className="icon-up button__scroll--icon" aria-hidden="true"></span>
        </button>
      </div>
    </>
  )
};

import React from 'react';
import './Footer.scss';
import { scrollToTop } from '../../utils/constants';
import { STATIC_URL } from '../../constants/core';

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
            <a className="footer__link" href="https://github.com/fe-jul23-NORM">Github</a>
            <a className="footer__link" href="/about">About</a>
            <a className="footer__link" href="/rights">Rights</a>
          </div>
        </div>

        <button
          type="button"
          className="button__scroll"
          onClick={() => scrollToTop()}
        >
          <p className='button_scroll--text'>Back to top</p>
          <span className="icon-up button__scroll--icon" aria-hidden="true"></span>
        </button>
      </div>
    </>
  )
};

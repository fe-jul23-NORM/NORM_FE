import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="footer">
        <img
          className="footer__logo"
          src="https://i.imgur.com/3XBExxM.png"
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
          {/* <img
            src="https://i.imgur.com/43nHath.png"
            className="button__scroll--icon"
            alt="Go To Top button"
          /> */}
          <span className="icon-up button__scroll--icon" aria-hidden="true"></span>
        </button>
      </div>
    </>
  )
};

export default Footer;

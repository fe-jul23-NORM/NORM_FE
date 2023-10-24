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

        <div className="footer_nav">
          <div className="nav">
            <a className="footer__link" href="https://github.com/fe-jul23-NORM">Github</a>
            <a className="footer__link" href="/about">About</a>
            <a className="footer__link" href="/rights">Rights</a>
          </div>
        </div>

        <button
          type="button"
          className="button button_scroll"
          onClick={() => scrollToTop()}
        >
          <p className='button_scroll--text'>Back to top</p>
          <img
            src="https://i.imgur.com/43nHath.png"
            className="button_scroll--icon"
            alt="Go To Top button"
          />
        </button>
      </div>
    </>
  )
};

export default Footer;

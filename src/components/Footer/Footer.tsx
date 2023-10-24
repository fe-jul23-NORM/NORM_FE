import React from 'react';
// import classNames from 'classnames';
import './Footer.scss';

const Footer: React.FC = () => {
  // const [isShown, setIsShown] = useState(false);

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_container">
          <a href="#home" className="nav__logo">
            <img src="https://i.imgur.com/3XBExxM.png" alt="NICE GAGETS logo" />
          </a>

          <ul className="footer__list">
            <li><a className="footer__link" href="#/github">Github</a></li>
            <li><a className="footer__link" href="/contacts">Contacts</a></li>
            <li><a className="footer__link" href="/rights">Rights</a></li>
          </ul>

          {/* <div className="nav">
            <div className={classNames({ 'nav_bar': !isShown, 'nav_bar--column': isShown })} id="nav">
              <a className="nav__link is-active" href="#/github">Github</a>
              <a className="nav__link" href="/contacts">Contacts</a>
              <a className="nav__link" href="/rights">Rights</a>
            </div>
          </div> */}

          {/* <div className="header_icons">
            <a
              href="#nav"
              className="header_icon header_icon--burger"
              onClick={() => setIsShown(!isShown)}
            >
              <img src="https://i.imgur.com/YC6erXs.png" alt="Menu" />
            </a>
            <a href="/favorites" className="header_icon header_icon--heart">
              <img src="https://i.imgur.com/sSTbj0p.png" alt="Favourites" />
            </a>
            <a href="/cart" className="header_icon header_icon--cart">
              <img src="https://i.imgur.com/3NrJZ4A.png" alt="Shopping Cart" />
            </a>
          </div> */}

          <div className="footer__backTo">
            <p>Back to top</p>

            <button
              type="button"
              className="footer__button"
            >
              <img
                src="https://i.imgur.com/43nHath.png"
                className="footer__button--icon"
                alt="Arrow button"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;

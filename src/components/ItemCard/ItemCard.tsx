import React from 'react';
import './ItemCard.scss';

const Card: React.FC = () => {
  return (
    <>
      <div className='item-card'>
        <p className="item-card__title">
          Apple iPhone 11 Pro Max  
          <br/>
          64GB Gold (iMT9G2FS/A)
        </p>
        
        <img 
          className="item-card__img"
          src="/images/card/item-card-main.png"
          alt="phone"
        />

        <div className="item-card__miniatures">
          <img 
            className="item-card__miniatures-miniature"
            src="/images/card/miniature.png"
            alt="phone"
          />

          <img 
            className="item-card__miniatures-miniature"
            src="/images/card/miniature.png"
            alt="phone"
          />

          <img 
            className="item-card__miniatures-miniature"
            src="/images/card/miniature.png"
            alt="phone"
          />

          <img 
            className="item-card__miniatures-miniature"
            src="/images/card/miniature.png"
            alt="phone"
          />

          <img 
            className="item-card__miniatures-miniature"
            src="/images/card/miniature.png"
            alt="phone"
          />
        </div>

        <div className="item-card__availible">
          <span className="item-card__availible-title">
            Available colors
          </span>
          <span className="item-card__availible-Id">
            ID: 802390
          </span>
        </div>

        <div className="item-card__colors">
          <button className='item-card__colors-color-1' />
          <button className='item-card__colors-color-2' />
          <button className='item-card__colors-color-3' />
          <button className='item-card__colors-color-4' />
        </div>

        <hr />

        <div className="item-card__capcity-title">
          Select capacity
        </div>

        <div className="item-card__capcity-set">
          <button className="gB_64">64 GB</button>
          <button className="gB_256">256 GB</button>
          <button className="gB_512">512 GB</button>
        </div>

        <hr />

        <div className="item-card__price">
          <p className="item-card__price-actual">
            $999
          </p>

          <p className="item-card__price-sale">
            $999
          </p>
      </div>

      <div className="item-card__footer">
        <button className="item-card__footer-button">
          Add to cart
        </button>

        <button className="item-card__footer-favourite"/>
      </div>

      <div className="item-card__description">
        <div className="description-item">
          <span className="description-item-title">
            Screen
          </span>
          <span className="description-item-value">
          6.5” OLED
          </span>
        </div>
        
        <div className="description-item">
          <span className="description-item-title">
          Resolution
          </span>
          <span className="description-item-value">
          2688x1242
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
          Processor
          </span>
          <span className="description-item-value">
          Apple A12 Bionic
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            RAM
          </span>
          <span className="description-item-value">
            3 GB
          </span>
        </div>
      </div>

      <div className="item-card__section">
        About
      </div>

      <hr />

      <div className="item-card__chapter">
        <p className="item-card__chapter-title">
          And then there was Pro
        </p>
        <p className="item-card__chapter-description">
          A transformative triple‑camera system
          that adds tons of capability withoutu
          complexity. 
          <br />
          <br />
          An unprecedented leap in battery life.
          And a mind‑blowing chip that doubles
          down on machine learning and pushes 
          the boundaries of what a smartphone
          can do. Welcome to the first iPhone
          powerful enough to be called Pro.
        </p>

      </div>

      <div className="item-card__chapter">
        <p className="item-card__chapter-title">
          Camera
        </p>
        <p className="item-card__chapter-description">
        Meet the first triple-camera system to combine
        cutting-edge technology with the legendary
        simplicity of iPhone. Capture up to four times more
        scene. Get beautiful images in drastically lower light.
        Shoot the highest-quality video in a smartphone — then
        edit with the same tools you love for photos. 
        You've never shot with anything like it.
        </p>

      </div>

      <div className="item-card__chapter">
        <p className="item-card__chapter-title">
          Shoot it. Flip it. Zoom it. Crop it. Cut it. 
          Light it. Tweak it. Love it.
        </p>
        <p className="item-card__chapter-description">
        iPhone 11 Pro lets you capture videos that are 
        beautifully true to life, with greater detail 
        and smoother motion. Epic processing power means 
        it can shoot 4K video with extended dynamic range 
        and cinematic video stabilization — all at 60 fps. 
        You get more creative control, too, with four times
        more scene and powerful new editing tools to play with.
        </p>

      </div>
      
      <div className="item-card__section">
        Tech specs
      </div>

      <hr />

      <div className="item-card__description last">
        <div className="description-item">
          <span className="description-item-title">
            Screen
          </span>
          <span className="description-item-value">
          6.5” OLED
          </span>
        </div>
        
        <div className="description-item">
          <span className="description-item-title">
          Resolution
          </span>
          <span className="description-item-value">
          2688x1242
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            Processor
          </span>
          <span className="description-item-value">
            Apple A12 Bionic
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            RAM
          </span>
          <span className="description-item-value">
            3 GB
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            Built in memory
          </span>
          <span className="description-item-value">
            64 GB
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            Camera
          </span>
          <span className="description-item-value">
            12 Mp + 12 Mp + 12 Mp (Triple)
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            Zoom
          </span>
          <span className="description-item-value">
            Optical, 2x
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            Cell
          </span>
          <span className="description-item-value">
            GSM, LTE, UMTS
          </span>
        </div>
      </div>
      </div>
    </>
  )
};

export default Card;

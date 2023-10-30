import React from 'react';
import './ItemCard.scss';
import Button from '../Button/Button';
import Heart from '../Heart/Heart';
import { AvailableColors } from '../../types/AvailableColors';
import { Capacity } from '../../types/Capacity';


const ItemCard: React.FC = () => {
  const availableColors = Object.entries(AvailableColors);
  const capacity = Object.entries(Capacity);

  return (
      <div className='item-card'>
        <div className="item-card__nav">
          <a href="/" className="item-card__nav-icon">
            <img src="https://i.imgur.com/WmTuk3L.png" alt="home" />
          </a>
          <img
            src="https://i.imgur.com/zNeLDRA.png"
            alt="arrow-right"
            className="item-card__nav-icon" />

          <a href="/" className="catalog__nav-text">
            Phones
          </a>
          <img
            src="https://i.imgur.com/zNeLDRA.png"
            alt="arrow-right"
            className="item-card__nav-icon" />

          <a href="/" className="catalog__nav-text">
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </a>
        </div>
        <p className="item-card__title">
          Apple iPhone 11 Pro Max  64GB Gold (iMT9G2FS/A)
        </p>

        <div className="container">
          <div className="container__images">
            <img className="container__images-main"
              src="/images/card/item-card-main.png"
              alt="phone"
            />

            <div className="container__images-miniatures">
              <img
                className="container__images-miniatures-item"
                src="/images/card/miniature.png"
                alt="phone"
              />

              <img
                className="container__images-miniatures-item"
                src="/images/card/miniature.png"
                alt="phone"
              />

              <img
                className="container__images-miniatures-item"
                src="/images/card/miniature.png"
                alt="phone"
              />


              <img
                className="container__images-miniatures-item"
                src="/images/card/miniature.png"
                alt="phone"
              />

              <img
                className="container__images-miniatures-item"
                src="/images/card/miniature.png"
                alt="phone"
              />
            </div>
          </div>

          <div className="container__info">
            <div className="container__info-availible">
              <span className="container__info-availible-title">
                Available colors
              </span>
              <span className="container__info-availible-Id">
                ID: 802390
              </span>
            </div>

            <div className="container__info-colors">
              {availableColors.map(([key, value]) => (
                <button 
                  className="container__info-colors-color"
                  style={{backgroundColor: `${value}`}}
                  key={key}
                />
              ))}
            </div>

            <hr />

            <div className="container__info-capcity">
              <div className="container__info-capcity-title">
                Select capacity
              </div>

              <div className="container__info-capcity-set">
                {capacity.map(([key, value]) => (
                  <button
                    className="gB"
                    key={key}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <hr />

            <div className="container__info-price">
              <p className="container__info-price-actual">
                $999
              </p>

              <p className="container__info-price-sale">
                $999
              </p>
            </div>

            <div className="container__info-cart">
              <div className="container__info-cart-button">
              {/* <Button /> */}
              </div>

              <div className="container__info-cart-favourite">
                <Heart />
              </div>
            </div>

            <div className="container__info-description">
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
          </div>
        </div>

        <div className="main">
          <div className="main__about">
            <p className="main__about-title">
              About
            </p>

            <hr />

            <div className="main__about-chapter">
              <p className="main__about-chapter-title">
                And then there was Pro
              </p>

              <p className="main__about-chapter-description">
                A transformative triple-camera system
                that adds tons of capability withoutu
                complexity.
                <br />
                <br />
                An unprecedented leap in battery life.
                And a mind-blowing chip that doubles
                down on machine learning and pushes
                the boundaries of what a smartphone
                can do. Welcome to the first iPhone
                powerful enough to be called Pro.
              </p>
            </div>

            <div className="main__about-chapter">
              <p className="main__about-chapter-title">
                Camera
              </p>

              <p className="main__about-chapter-description">
                Meet the first triple-camera system to combine
                cutting-edge technology with the legendary
                simplicity of iPhone. Capture up to four times more
                scene. Get beautiful images in drastically lower light.
                Shoot the highest-quality video in a smartphone — then
                edit with the same tools you love for photos.
                You`&#39;`ve never shot with anything like it.
              </p>
            </div>

            <div className="main__about-chapter">
              <p className="main__about-chapter-title">
                Shoot it. Flip it. Zoom it. Crop it. Cut it.
                Light it. Tweak it. Love it.
              </p>

              <p className="main__about-chapter-description">
                iPhone 11 Pro lets you capture videos that are
                beautifully true to life, with greater detail
                and smoother motion. Epic processing power means
                it can shoot 4K video with extended dynamic range
                and cinematic video stabilization — all at 60 fps.
                You get more creative control, too, with four times
                more scene and powerful new editing tools to play with.
              </p>
            </div>
          </div>

          <div className="main__specs">
            <p className="main__specs-title">
              Tech specs
            </p>

            <hr />

            <div className="main__specs-description">
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
        </div>
      </div>
  )
};

export default ItemCard;

import React from 'react';
import './Card.scss';

const Card: React.FC = () => {
  return (
    <div className="card">
      <img 
        className="card__img"
        src="/card_img.png"
        alt="phone"
      />

      <p className="card__title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>
      <p className="card__price">
        $999
      </p>

      <div className="card__description">
        <div className="description-item">
          <p className="description-item-title">
            Screen
          </p>
          <p className="description-item-value">
            6.1” OLED
          </p>
        </div>

        <div className="description-item">
          <p className="description-item-title">
          Capacity
          </p>
          <p className="description-item-value">
            128 GB
        </p>
        </div>

        <div className="description-item">
          <p className="description-item-title">
            RAM
          </p>
          <p className="description-item-value">
            6 GB
          </p>
        </div>
      </div>

      <div className="card__footer">
        <button className="card__footer-button">
          Add to cart
        </button>

        <span className="card__footer-favourite"></span>
      </div>
    </div>
  )
};

export default Card;

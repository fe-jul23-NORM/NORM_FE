import React from 'react';
import './Card.scss';
import { IProduct } from '../../types/product.types';
import ButtonCart from '../ButtonCart/ButtonCart';
import { Form } from 'react-router-dom';


type Props = {
  product: IProduct,
}

const Card: React.FC<Props> = () => {
  return (
    <div className="card">
      <img 
        className="card__img"
        src="/images/card/card_img.png"
        alt="phone"
      />
      
      <p className="card__title">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>

      <div className="card__price">
        <p className="card__price-actual">
          $999
        </p>

        <p className="card__price-sale">
          $999
        </p>
      </div>

      <hr />

      <div className="card__description">
        <div className="description-item">
          <span className="description-item-title">
            Screen
          </span>
          <span className="description-item-value">
          6.1” OLED
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
          Capacity
          </span>
          <span className="description-item-value">
            128 GB
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            RAM
          </span>
          <span className="description-item-value">
            6 GB
          </span>
        </div>
      </div>

      <div className="card__footer">
        <ButtonCart />

        <button className="card__footer-favourite"/>
      </div>
    </div>
  )
};

export default Card;

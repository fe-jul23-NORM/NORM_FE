import React from 'react';
import './Card.scss';
import { IProduct } from '../../types/product.types';
import ButtonCart from '../ButtonCart/ButtonCart';
import { BASE_URI } from '../../constants/core';

type Props = {
  product: IProduct,
}

const Card: React.FC<Props> = ({ product }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    ram,
    capacity,
    image
  } = product;

  return (
    <div className="card">
      <img 
        className="card__img"
        src={`${BASE_URI}/${image}`}
        alt=""
      />
      
      <p className="card__title">
        {name}
      </p>

      <div className="card__price">
        <p className="card__price-actual">
          {`$${fullPrice}`}
        </p>

        <p className="card__price-sale">
        {`$${price}`}
        </p>
      </div>

      <hr />

      <div className="card__description">
        <div className="description-item">
          <span className="description-item-title">
            Screen
          </span>
          <span className="description-item-value">
            {screen}
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
          Capacity
          </span>
          <span className="description-item-value">
            {capacity}
          </span>
        </div>

        <div className="description-item">
          <span className="description-item-title">
            RAM
          </span>
          <span className="description-item-value">
            {ram}
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

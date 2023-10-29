import React from 'react';
import './Card.scss';
import { Product } from '../../types/product.types';
import Button from '../Button/Button';
import { BASE_URI } from '../../constants/core';
import Heart from '../Heart/Heart';
import { useAppDispatch } from '../../store';
import { addToCart } from '../../store/cart/slice';

type Props = {
  product: Product,
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

  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(product))
  }

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
        <Button
          text='Add to cart'
          handleClick={addItemToCart}
        />

<div className="card__footer-favourite" >
          <Heart />
        </div>
      </div>
    </div>
  )
};

export default Card;

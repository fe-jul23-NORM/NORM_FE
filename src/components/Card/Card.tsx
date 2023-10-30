import React from 'react';
import './Card.scss';
import { CartProduct, Product } from '../../types/product.types';
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
  const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const addItemToCart = () => {
    dispatch(addToCart(product));

    const updatedCart = [...cart, { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const isSelected = cart.some(({ id }) => id === product.id);

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
          {`$${price}`}
        </p>

        <p className="card__price-sale">
          {`$${fullPrice}`}
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
            text={isSelected ? 'Added to cart' : 'Add to cart'}
            handleClick={addItemToCart}
            isSelected={isSelected}
          />

        <div className="card__footer-favourite" >
          <Heart />
        </div>
      </div>
    </div>
  )
};

export default Card;

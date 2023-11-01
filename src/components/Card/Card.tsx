import React, { memo, useCallback, useMemo } from 'react';
import './Card.scss';
import { CartProduct, Product } from '../../types/product.types';
import Button from '../Button/Button';
import { BASE_URI } from '../../constants/core';
import Heart from '../Heart/Heart';
import { useAppDispatch, useAppSelector } from '../../store';
import { addToCart } from '../../store/cart/slice';
import { addToFavourites, removeFromFavourites } from '../../store/products/slice';
import { addFavouriteThunk, removeFavouriteThunk } from '../../store/products/thunks';
import { selectCart } from '../../store/cart/selectors';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFavorites } from '../../store/products/selectors';
import { useNavigate } from 'react-router-dom';

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
    image,
    id,
    itemId,
  } = product;

  const dispatch = useAppDispatch();
  const cart: CartProduct[] = useAppSelector(selectCart);
  const navigate = useNavigate();
  const isSelected = useMemo(() => cart.some(({ id }) => id === product.id), [cart]);
  const favourites: Product[] = useSelector(selectFavorites, shallowEqual);
  const isFavourite = useMemo(() => {
    return favourites.some(({ id }) => id === product.id);
  }, [favourites, id]);
  const user = useAppSelector(state => state.auth.user);

  const addItemToCart = useCallback(() => {
    if (!isSelected) {
      dispatch(addToCart(product));

      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }, [isSelected, cart])

  const handleFavourites = useCallback(() => {
    if (user) {
      if (isFavourite) {
        dispatch(removeFavouriteThunk(product.id));
      } else {
        dispatch(addFavouriteThunk(product.id));
      }
    } else {
      if (isFavourite) {
        dispatch(removeFromFavourites(product));
        const updatedFavourites = favourites.filter((favProduct) => favProduct.id !== product.id);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      } else {
        dispatch(addToFavourites(product));
        const updatedFavourites = [...favourites, product];
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      }
    }
  }, [user, isFavourite]);

  const handleNavigate = () => {
    navigate(`/${itemId}`);
  }

  return (
    <div
      className="card"
    >
      <img
        onClick={handleNavigate}
        className="card__img"
        src={`${BASE_URI}/${image}`}
        alt=""
      />

      <p className="card__title" onClick={handleNavigate}>
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
          isSelected={isSelected}
          text={isSelected ? 'Added to to cart' : 'Add to cart'}
          handleClick={addItemToCart}
        />

        <Heart handleClick={handleFavourites} isFavourite={isFavourite} />
      </div>
    </div>
  )
};

export default memo(Card);

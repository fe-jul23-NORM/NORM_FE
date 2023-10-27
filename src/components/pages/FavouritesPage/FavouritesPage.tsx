import React, { useEffect } from 'react';
import Card from '../../Card/Card';
import './FavouritesPage.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectNewProducts } from '../../../store/products/selectors';
import { getNewProductsThunk } from '../../../store/products/thunks';

const FavouritesPage: React.FC = () => {
  const products = useAppSelector(selectNewProducts);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getNewProductsThunk());
  }, [])

  return (
    <div className="favourites__wrapper">

      <section className="favourites">

        <div className="favourites__top">
          <div className="favourites__nav">

            <a href="/" className="favourites__nav-icon">
              <img src="https://i.imgur.com/WmTuk3L.png" alt="home" />
            </a>

            <img
              src="https://i.imgur.com/zNeLDRA.png"
              alt="arrow-right"
              className="favourites__nav-icon" />

            <span className="favourites__nav-text">
              Favourites
            </span>
          </div>

          <h1 className='favourites__title'>
            Favourites
          </h1>

          <p className="favourites__amount">
            5 items
          </p>
        </div>

        <div className="favourites__container">
          {products.map(product => {
            return (
              <div key={product.id} className="favourites__item">
                <Card product={product} />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default FavouritesPage;

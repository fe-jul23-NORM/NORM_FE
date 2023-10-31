import React from 'react';
import Card from '../../Card/Card';
import './FavouritesPage.scss';
import { useAppSelector } from '../../../store';

const FavouritesPage: React.FC = () => {
  const favourites = useAppSelector(state => state.product.favourites);

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
            {favourites.length > 1
            ? `${favourites.length} items`
            : `${favourites.length} item`}
          </p>
        </div>

        <div className="favourites__container">
          {favourites.map(product => {
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

import React from 'react';
import Card from '../../Card/Card';
import './FavouritesPage.scss';
import { useAppSelector } from '../../../store';
import PageNavigation from '../../PageNavigation/PageNavigation';

const FavouritesPage: React.FC = () => {
  const favourites = useAppSelector(state => state.product.favourites);

  return (
    <div className="favourites">
      <section className="favourites__wrapper">
        <div className="favourites__top">
          <div className="favourites__nav">
            <PageNavigation links={[{ link: '/favourites', text: 'Favourites' }]} />
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

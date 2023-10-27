import React, { useState } from 'react';
import './Catalog.scss';
import Card from '../Card/Card';
import { useAppSelector } from '../../store';
import { selectAllProducts, selectProductsCount } from '../../store/products/selectors';

const Catalog: React.FC = () => {
  const allProducts = useAppSelector(selectAllProducts);
  const totalProducts = useAppSelector(selectProductsCount);
  console.log(totalProducts);

  const [perPage, setPerPage] = useState(10);

  const paginationArray = Array.from(Array((Math.ceil(totalProducts / perPage)) + 1).keys()).slice(1);

  return (
    <section className="catalog">
      <div className="head-container">

        <div className="title-container">
          <div className="catalog__nav">
            <a href="/" className="catalog__nav-icon">
              <img src="https://i.imgur.com/WmTuk3L.png" alt="home" />
            </a>
            <img
              src="https://i.imgur.com/zNeLDRA.png"
              alt="arrow-right"
              className="catalog__nav-icon" />

            <a href="/" className="catalog__nav-text">
              Phones
            </a>
          </div>
          <h1 className='page__title'>
            Mobile phones
          </h1>

          <p className="page__items-amount">
            95 models
          </p>
        </div>

        <form method="post" className="catalog__form">
          <div className="catalog__form-wrapper">
            <label htmlFor="perPage" className="catalog__form-item">
              <span className="catalog__form-type">Sort by</span>

              <select
                name="itemsPerPage"
                id="perPage"
                className="catalog__form-select"
              >
                <option value="year">Newest</option>
                <option value="name">Alphabetically</option>
                <option value="price">Cheapest</option>
              </select>
            </label>

            <label htmlFor="perPage" className="catalog__form-item">
              <span className="catalog__form-type">items on page</span>

              <select
                name="itemsPerPage"
                id="perPage"
                className="catalog__form-select"
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="24">24</option>
                <option value="All">All</option>
              </select>
            </label>
          </div>
        </form>
      </div>

      <div className="catalog__container">
        {allProducts.map(product => {
          return (
            <div key={product.id} className="productCard">
              <Card product={product} />
            </div>
          )
        })}
      </div>

      <div className="page__pagination">
        <div className="pagination-icon">
          <img src="https://i.imgur.com/dB7Z9gF.png" alt="arrow-left" className="pagination-icon--left" />
        </div>
        {paginationArray.map(page => {
          return (
            // eslint-disable-next-line react/jsx-key
            <span className="pagination-number pagination-number--active1">{page}</span>
          )
        })}
        <div className="pagination-icon">
          <img src="https://i.imgur.com/dPv3LqE.png" alt="arrow-right" className="pagination-icon--right" />
        </div>
      </div>
    </section>
  )
}

export default Catalog;
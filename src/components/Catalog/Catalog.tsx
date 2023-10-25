import React from 'react';
import './Catalog.scss';
import Card from '../Card/Card';

const Catalog: React.FC = () => {
  return (
    <section className="catalog">
      <form method="post" className="catalog__form">
        <div className="catalog__form-wrapper">
          <label htmlFor="perPage" className="catalog__form-item">
            <span className="catalog__form-type">items on page</span>

            <select
              name="itemsPerPage"
              id="perPage"
              className="catalog__form-select"
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="All">All</option>
            </select>
          </label>

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
        </div>
      </form>

      <div className="catalog__container">
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        <div className="productCard">
          <Card />
        </div>
        
      </div>
    </section>
  )
}

export default Catalog;
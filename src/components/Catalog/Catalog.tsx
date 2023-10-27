import React, { useEffect, useState } from 'react';
import './Catalog.scss';
import Card from '../Card/Card';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectAllProducts, selectProductsCount } from '../../store/products/selectors';
import { getProductsThunk } from '../../store/products/thunks';
import { ProductTypesEnum, SortProductByEnum } from '../../types/product.types';
import Pagination from './Pagination';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts);
  const totalProducts = useAppSelector(selectProductsCount);
  console.log(totalProducts);

  // const [sortBy, setSortBy] = useState('');
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  // const paginationArray = Array
  //   .from(Array((Math.ceil(totalProducts / productsPerPage)) + 1)
  //     .keys())
  //   .slice(1);

  useEffect(() => {
    dispatch(getProductsThunk({
      page: currentPage,
      perPage: productsPerPage,
      productType: ProductTypesEnum.Phones,
      sortBy: SortProductByEnum.Name,
    }))
  }, [currentPage, dispatch, productsPerPage]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductsPerPage(+event.target.value);
  };

  // const visiblePages = paginationArray.slice(currentPage - 1, currentPage + 3)

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
            {`${totalProducts} ${totalProducts > 1 ? 'models' : 'model'}`}
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
                value={productsPerPage}
                onChange={handleChange}
              >
                <option value="8">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value={totalProducts}>All</option>
              </select>
            </label>
          </div>
        </form>
      </div>

      <div className="catalog__container">
        {allProducts.map(product => {
          return (
            <div className="productCard">
              <Card product={product} />
            </div>
          )
        })}
      </div>

      <div className="page__pagination">
        <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalProducts}
              pageSize={productsPerPage}
              onPageChange={(page: React.SetStateAction<number>) => setCurrentPage(page)}
            />
      </div>
    </section>
  )
}

export default Catalog;
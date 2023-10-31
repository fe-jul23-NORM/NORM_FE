import React, { useEffect } from 'react';
import './Catalog.scss';
import Card from '../Card/Card';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectAllProducts, selectProductsCount } from '../../store/products/selectors';
import { getProductsThunk } from '../../store/products/thunks';
import { ProductTypesEnum, SortProductByEnum } from '../../types/product.types';
import Pagination from '../Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Dropdown } from '../Dropdown/Dropdown';

const itemsOnPageOptions = ['8', '16', '32', 'All'];

const isPlural = (number: number) => {
  const stringTotal = number.toString();

  if (stringTotal[stringTotal.length - 1] !== '1') {
    return true;
  }

  return false;
};

const normalizeQuery = (query: string) => {
  return `${query[0].toUpperCase()}${query.slice(1)}`
};

const setSortBy = (value: string) => {
  if (value === 'age') {
    return SortProductByEnum.Age;
  }
  if (value === 'name') {
    return SortProductByEnum.Name;
  }

  return SortProductByEnum.Price;
};

const setProductsType = (product: string) => {
  if (product === ProductTypesEnum.Phones) {
    return ProductTypesEnum.Phones;
  }
  if (product === ProductTypesEnum.Accessories) {
    return ProductTypesEnum.Accessories;
  }

  return ProductTypesEnum.Tablets;
};

type Props = {
  product: string,
}

const Catalog: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts);
  const totalProducts = useAppSelector(selectProductsCount);
  const [searchParams] = useSearchParams();  

  const productsType = setProductsType(product);

  const sortByOptions = Object.keys(SortProductByEnum);

  const itemsOnPage = Number(searchParams.get('itemsOnPage'))
    || +itemsOnPageOptions[0];

  const sortedBy = searchParams.get('sort')
    || sortByOptions[0];

  const currentPage = searchParams.get('page')
    || 1;

  useEffect(() => {
    dispatch(getProductsThunk({
      page: +currentPage,
      perPage: itemsOnPage,
      productType: productsType,
      sortBy: setSortBy(sortedBy),
    }))
  }, [currentPage, dispatch, itemsOnPage, sortedBy, productsType],);

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
              {normalizeQuery(productsType)}
            </a>
          </div>
          <h1 className='page__title'>
            {normalizeQuery(productsType)}
          </h1>

          <p className="page__items-amount">
            {`${totalProducts} ${isPlural(totalProducts) ? 'models' : 'model'}`}
          </p>
        </div>

        <div className="catalog__form-wrapper">
          <Dropdown
            label="Sort by"
            classModificator="sort"
            options={sortByOptions}
            startValue={normalizeQuery(sortedBy)}
            searchParamsKey="sort"
          />

          <Dropdown
            label="Items on page"
            classModificator="items"
            options={itemsOnPageOptions}
            startValue={itemsOnPageOptions[0]}
            searchParamsKey="itemsOnPage"
          />
        </div>
      </div>

      <div className="catalog__container">
        {allProducts.map(product => {
          return (
            <Card product={product} key={product.id} />
          )
        })}
      </div>

      <div className="page__pagination">
        <Pagination
          page={String(currentPage)}
          total={totalProducts}
          perPage={itemsOnPage}
        />
      </div>
    </section>
  )
}

export default Catalog;

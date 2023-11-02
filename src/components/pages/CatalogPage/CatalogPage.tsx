import React, { useEffect } from 'react';
import './CatalogPage.scss';
import Card from '../../Card/Card';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectAllProducts, selectProductsCount } from '../../../store/products/selectors';
import { getProductsThunk } from '../../../store/products/thunks';
import { SortProductByEnum } from '../../../types/product.types';
import { Pagination } from '../../Pagination';
import { useSearchParams } from 'react-router-dom';
import { Dropdown } from '../../Dropdown/Dropdown';
import { PageNavigation } from '../../PageNavigation';
import { isPlural, normalizeQuery, setProductsType, setSortBy } from '../../../utils/functions';
import { itemsOnPageOptions } from '../../../utils/constants';

type Props = {
  product: string,
}

export const CatalogPage: React.FC<Props> = ({ product }) => {
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
          <PageNavigation links={[{ link: `/${productsType}`, text: productsType }]} />
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

import Card from '../Card/Card';
import ItemCard from '../ItemCard/ItemCard';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import Catalog from '../Catalog/Catalog';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import HomePage from '../pages/HomePage/HomePage';
import Cart from '../Cart/Cart';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { getProductsThunk } from '../../store/products/thunks';
import { IProduct, ProductTypesEnum } from '../../types/product.types';
import { addToFavorites } from '../../store/products/slice';
import { BASE_URI } from '../../constants/core';

function App() {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector((state) => state.product.all);

  const handleClick = (product: IProduct) => {
    dispatch(addToFavorites(product))
  }

  useEffect(() => {
    dispatch(getProductsThunk({
      page: 2,
      perPage: 10,
      productType: ProductTypesEnum.Phones,
    }))
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>

    {allProducts.map((product) => {
      return (
        <div>
          <p>{product.name}</p>
          <img src={`${BASE_URI}/${product.image}`} />
          <button onClick={() => handleClick(product)}>jopa</button>
        </div>
      )
    })}
    </>
  );
}

export default App;

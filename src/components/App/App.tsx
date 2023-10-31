import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import Catalog from '../Catalog/Catalog';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import HomePage from '../pages/HomePage/HomePage';
import Cart from '../Cart/Cart';
import { useAppDispatch, useAppSelector } from '../../store';
import { getProductsThunk } from '../../store/products/thunks';

import { selectAllProducts } from '../../store/products/selectors';

import { Product, ProductTypesEnum } from '../../types/product.types';
import { addToFavorites } from '../../store/products/slice';
import { BASE_URI } from '../../constants/core';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import ItemCard from '../ItemCard/ItemCard';
import '../../utils/_reset.scss';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import { refresh } from '../../store/auth/thunks';

function App() {
  
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts)
  const isLoading = useAppSelector((state) => state.product.isLoading)

  const handleClick = (product: Product) => {
    dispatch(addToFavorites(product))
  }

  useEffect(() => {
    dispatch(refresh())
  }, []);

  return (
  <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favourites' element={<FavouritesPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>

    {/* <LoginPage /> */}
    </>
  );
}

export default App;

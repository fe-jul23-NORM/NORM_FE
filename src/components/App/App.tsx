import React, { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Cart from '../Cart/Cart';
import { useAppDispatch, useAppSelector } from '../../store';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import '../../utils/_reset.scss';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import AuthLayout from '../HOC/AuthLayout/AuthLayout';
import { Loader } from '../Loader/Loader';
import { selectAllProducts } from '../../store/products/selectors';
import { Product } from '../../types/product.types';
// import { addToFavorites } from '../../store/products/slice';
import { selectAuthLoading } from '../../store/auth/selectors';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import AboutUs from '../About-us/About-us';

import { initThunk } from '../../store/core/thunks';
import RequiredAuth from '../HOC/RequiredAuth/RequiredAuth';

function App() {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(selectAllProducts)
  const [isLoading, setLoading] = useState(true);

  
  useEffect(() => {
    dispatch(initThunk())
      .unwrap()
      .catch((e) => {
        // TODO
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  return (
      isLoading ? (
        <div className='app-loader-wrapper'>
          <Loader/>
        </div>
        ) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/phones' element={<CatalogPage product={'phones'} />} />
            <Route path='/tablets' element={<CatalogPage product={'tablets'} />} />
            <Route path='/accessories' element={<CatalogPage product={'accessories'} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourites' element={<FavouritesPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='*' element={<NotFoundPage />} />
            
            <Route path='/' element={<RequiredAuth/>}>
              <Route path='/orders' element={<p >Orders</p>} />
            </Route>
          </Route>
          <Route path='/' element={<AuthLayout/>}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Routes>
      )
  );
}

export default App;

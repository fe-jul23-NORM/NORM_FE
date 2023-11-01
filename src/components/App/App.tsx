import React, { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import Catalog from '../Catalog/Catalog';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Cart from '../Cart/Cart';
import { useAppDispatch } from '../../store';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import '../../utils/_reset.scss';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import AuthLayout from '../HOC/AuthLayout/AuthLayout';
import { Loader } from '../Loader/Loader';
import { initThunk } from '../../store/core/thunks';
import RequiredAuth from '../HOC/RequiredAuth/RequiredAuth';

function App() {
  const dispatch = useAppDispatch();
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
            <Route path='/phones' element={<Catalog product={'phones'} />} />
            <Route path='/tablets' element={<Catalog product={'tablets'} />} />
            <Route path='/accessories' element={<Catalog product={'accessories'} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourites' element={<FavouritesPage />} />
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

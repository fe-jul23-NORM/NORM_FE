import React, { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Cart } from '../Cart/Cart';
import { useAppDispatch } from '../../store';
import '../../utils/_reset.scss';
import 'react-toastify/dist/ReactToastify.css';
import { initThunk } from '../../store/core/thunks';
import { errorManager } from '../../utils/errorManager';
import { Loader } from '../Loader';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { ItemCard } from '../ItemCard';
import { AboutUs } from '../About-us';
import { RequiredAuth } from '../HOC/RequiredAuth';
import { OrdersPage } from '../pages/OrdersPage';
import { AuthLayout } from '../HOC/AuthLayout';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

function App() {
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(initThunk())
      .unwrap()
      .catch((e) => {
        errorManager(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  return (
    isLoading ? (
      <div className='app-loader-wrapper'>
        <Loader />
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
          <Route path='/:id' element={<ItemCard />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='*' element={<NotFoundPage />} />

          <Route path='/' element={<RequiredAuth />}>
            <Route path='/orders' element={<OrdersPage />} />
          </Route>
        </Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    )
  );
}

export default App;

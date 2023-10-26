import { Routes, Route } from 'react-router-dom'
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import './App.css';
import Card from '../Card/Card';
import ItemCard from '../ItemCard/ItemCard';
// import { Route, Routes } from 'react-router-dom';
// import Layout from '../HOC/Layout/Layout';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import { getProductsThunk } from '../../store/products/thunks';
import { ProductTypesEnum } from '../../types/product.types';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsThunk({
      page: 1,
      perPage: 10,
      productType: ProductTypesEnum.Phones,
    }));
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/phones' element={<Catalog />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );

}

export default App;

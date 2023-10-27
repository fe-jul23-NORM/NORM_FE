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
import { ProductTypesEnum } from '../../types/product.types';
import { selectAllProducts } from '../../store/products/selectors';

function App() {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts)
  const isLoading = useAppSelector((state) => state.product.isLoading)
  console.log(allProducts)

  useEffect(() => {
    dispatch(getProductsThunk({
      page: 1,
      perPage: 10,
      productType: ProductTypesEnum.Phones,
    }));
  }, [])


  return (
    <>
      {
        isLoading ? <p>Loading joppa</p> : (
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/phones' element={<Catalog />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        )
      }
    </>
  );
}

export default App;

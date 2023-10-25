import { Routes, Route } from 'react-router-dom'
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import './App.css';
import Catalog from '../Catalog/Catalog';
import Cart from '../Cart/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/phones' element={<Catalog />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;

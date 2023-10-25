import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import './App.css';
import Card from '../Card/Card';
import ItemCard from '../ItemCard/ItemCard';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/phones' element={<h1>111</h1>} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* <Card /> 
      <ItemCard /> */}
    </>
  );
}

export default App;

import './App.css';
import Card from '../Card/Card';
import ItemCard from '../ItemCard/ItemCard';
import HomePage from '../pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Catalog from '../Catalog/Catalog';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Routes>
    <Route path='/' element={<HomePage />}>
       <Route path='/phones' element={<h1>111</h1>} />
       <Route path='*' element={<NotFoundPage />} />
    </Route>
   </Routes>
 <Header />
 <Catalog />
 <Card/>
 <ItemCard />
 <Footer />
<Header />
 <Catalog />
 <Footer />
    </>
  );
}

export default App;

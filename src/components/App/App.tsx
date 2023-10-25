import './App.css';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';
import { Route, Routes } from 'react-router-dom';
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Catalog from '../Catalog/Catalog';

function App() {
  return (
    <>
      {/* <Routes>
    <Route path='/' element={<Layout />}>
       <Route path='/phones' element={<h1>111</h1>} />
       <Route path='*' element={<NotFoundPage />} />
    </Route>
   </Routes>
 <Header />
 <Catalog />
 <Card/>
 <ItemCard />
 <Footer /> */}
<Header />
 <Catalog />
 <Footer /> 

    </>
  );
}

export default App;

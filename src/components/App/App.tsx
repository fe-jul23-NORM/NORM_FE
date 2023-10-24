import { Routes, Route } from 'react-router-dom'
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import './App.css';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';

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
 <br />
 <Card/>
 <br />
 <Footer />
 <br /> */}
 <ItemCard />
 </>
  );
}

export default App;

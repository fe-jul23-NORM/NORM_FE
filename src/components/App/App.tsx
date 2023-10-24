import './App.css';
import Header from '../Header/Header';
import Card from '../Card/Card';

import { Routes, Route } from 'react-router-dom'
import Layout from '../HOC/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
   <>
   {/* <Routes>
    <Route path='/' element={<Layout />}>
       <Route path='/phones' element={<h1>111</h1>} />
       <Route path='*' element={<NotFoundPage />} />
    </Route>
 </Routes> */}
 <Card/>
 </>
  );
}

export default App;

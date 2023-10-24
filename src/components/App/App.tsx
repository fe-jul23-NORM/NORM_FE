import './App.css';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ItemCard from '../ItemCard/ItemCard';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Layout />}>
       <Route path='/phones' element={<h1>111</h1>} />
       <Route path='*' element={<NotFoundPage />} />
    </Route>
   </Routes>
 <Header />
 <Card/>
 <Footer />
 <ItemCard />
 </>
  );
}

export default App;

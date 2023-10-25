import Bunner from '../../Banner/Banner';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__title">
        <h1>Welcome to Nice Gadgets store!</h1>
      </div>

      <Bunner />

      {/* <NewModels />

      <ShopByCategory />

      <ChipestModels /> */}
    </div>
  )
};

export default HomePage;
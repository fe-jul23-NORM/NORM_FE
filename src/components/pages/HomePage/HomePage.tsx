import Card from '../../Card/Card';
import './HomePage.scss';

const HomePage: React.FC = () => (
    <section className="main">
        <div className="home-page-gallery">
            <div className="home-page-gallery__title">
                <h2 className="home-page-gallery__title--value">Brand new model</h2>
                <div className="home-page-gallery__title--buttons">
                    <div className="button-left"></div>
                    <div className="button-right"></div>
                </div>
            </div>
            <div className="home-page-gallery--cards">
                <div className="productCard">
                    <Card />
                </div>
                <div className="productCard">
                    <Card />
                </div>
                <div className="productCard">
                    <Card />
                </div>
                <div className="productCard">
                    <Card />
                </div>
            </div>
        </div>
        <div className="shop-by-category">
            <h2 className="shop-by-category--title">Shop by category</h2>
            <div className="shop-by-category__categories">
                <div className="shop-by-category__categories--category">
                    <div className="shop-by-category__categories--category-image" />
                    <h3 className="shop-by-category__categories--category-title">
                        Phones
                    </h3>
                    <p className="shop-by-category__categories--category-count">Count models</p>
                </div>
                <div className="shop-by-category__categories--category">
                    <div className="shop-by-category__categories--category-image" />
                    <h3 className="shop-by-category__categories--category-title">
                        Phones
                    </h3>
                    <p className="shop-by-category__categories--category-count">Count models</p>
                </div>
                <div className="shop-by-category__categories--category">
                    <div className="shop-by-category__categories--category-image" />
                    <h3 className="shop-by-category__categories--category-title">
                        Phones
                    </h3>
                    <p className="shop-by-category__categories--category-count">Count models</p>
                </div>
            </div>
        </div>
        <div className="home-page-gallery">
            <div className="home-page-gallery__title">
                <h2 className="home-page-gallery__title--value">Brand new model</h2>
                <div className="home-page-gallery__title--buttons">
                    <div className="button-left"></div>
                    <div className="button-right"></div>
                </div>
            </div>

            <div className="home-page-gallery--cards">
                <div className="productCard">
                    <Card />
                </div>
                <div className="productCard">
                    <Card />
                </div>
                <div className="productCard">
                    <Card />
                </div>
                <div className="productCard">
                    <Card />
                </div>
            </div>
        </div>
    </section>
)

export default HomePage;

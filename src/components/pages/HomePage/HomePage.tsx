import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Banner from '../../Banner/Banner';
import Card from '../../Card/Card';
import './HomePage.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { useAppDispatch, useAppSelector } from '../../../store';
import { useEffect } from 'react';
import { getDiscountProductsThunk, getNewProductsThunk } from '../../../store/products/thunks';
import { selectDiscountProducts, selectNewProducts } from '../../../store/products/selectors';

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const newProducts = useAppSelector(selectNewProducts)
    const hotPrices = useAppSelector(selectDiscountProducts);
    console.log(newProducts);

    useEffect(() => {
        dispatch(getNewProductsThunk())
        dispatch(getDiscountProductsThunk());
    }, []);

    return (
        <section className="main">
            <div className="home-page">
                <div className="home-page__title">
                    <h1>Welcome to Nice Gadgets store!</h1>
                </div>
                <Banner />
            </div>
            <div className="home-page-gallery">
                <div className="home-page-gallery__title">
                    <h2 className="home-page-gallery__title--value">Brand new model</h2>
                    <div className="home-page-gallery__title--buttons">
                        <div className="new-models__button-left">
                            <MdOutlineKeyboardArrowLeft />
                        </div>
                        <div className="new-models__button-right">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
                <div className="home-page-gallery--cards">
                    <Swiper
                        modules={[Navigation, A11y]}
                        slidesPerView={4}
                        loop
                        navigation={{
                            nextEl: '.new-models__button-right',
                            prevEl: '.new-models__button-left',
                        }}
                    >
                        {newProducts.map(product => (
                            <SwiperSlide key={product.id}>
                                <Card product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
                            Tablets
                        </h3>
                        <p className="shop-by-category__categories--category-count">Count models</p>
                    </div>
                    <div className="shop-by-category__categories--category">
                        <div className="shop-by-category__categories--category-image" />
                        <h3 className="shop-by-category__categories--category-title">
                            Accessories
                        </h3>
                        <p className="shop-by-category__categories--category-count">Count models</p>
                    </div>
                </div>
            </div>
            <div className="home-page-gallery">
                <div className="home-page-gallery__title">
                    <h2 className="home-page-gallery__title--value">Hot Prices</h2>
                    <div className="home-page-gallery__title--buttons">
                        <div className="hot-prices__button-left">
                            <MdOutlineKeyboardArrowLeft />
                        </div>
                        <div className="hot-prices__button-right">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
                <div className="home-page-gallery--cards">
                    <Swiper
                        modules={[Navigation, A11y]}
                        slidesPerView={4}
                        loop
                        navigation={{
                            nextEl: '.hot-prices__button-right',
                            prevEl: '.hot-prices__button-left',
                        }}
                    >
                        {hotPrices.map(product => (
                            <SwiperSlide key={product.id}>
                                <Card product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HomePage;

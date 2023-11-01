import React, { useEffect } from 'react';
import './HomePage.scss';
import Banner from '../../Banner/Banner';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectDiscountProducts, selectNewProducts, selectProductsCategoryCount } from '../../../store/products/selectors';
import { getDiscountProductsThunk, getNewProductsThunk, getProductsCategoryCountThunk } from '../../../store/products/thunks';
import Card from '../../Card/Card';
import { STATIC_URL } from '../../../constants/core';
import { SLIDER_BREAKPOINTS } from '../../../constants/core';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useAppDispatch();
    const newProducts = useAppSelector(selectNewProducts)
    const hotPrices = useAppSelector(selectDiscountProducts);
    const { phones, tablets, accessories } = useAppSelector(selectProductsCategoryCount)

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getNewProductsThunk())
        dispatch(getDiscountProductsThunk());
        dispatch(getProductsCategoryCountThunk());
    }, []);

    const handleRoutePhones = () => {
        navigate(`/phones`);
    };

    const handleRouteTablets = () => {
        navigate(`/tablets`);
    };

    const handleRouteAccessories = () => {
        navigate(`/accessories`);
    };

    return (
        <main className="main">
            <section className="banner">
                <h1 className="home-page__title title">Welcome to Nice Gadgets store!</h1>
                <Banner />
            </section>
            <section className="new-models">
                <div className="new-models__title title">
                    <h1 className="new-models__title--value">Brand new model</h1>
                    <div className="new-models__title--buttons">
                        <div className="new-models__button-left">
                            <MdOutlineKeyboardArrowLeft />
                        </div>
                        <div className="new-models__button-right">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
                <div className="new-models__swiper">
                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        // autoplay
                        loop
                        breakpoints={SLIDER_BREAKPOINTS}
                        navigation={{
                            nextEl: '.new-models__button-right',
                            prevEl: '.new-models__button-left',
                        }}
                    >
                        {newProducts.map(product => (
                            <SwiperSlide key={`new-model-${product.id}`}>
                                <Card product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className="categories">
                <h1 className="categories__main--title title">Shop by category</h1>
                <div className="categories__wrapper">
                    <article className="categories__phones block">
                        <img
                            onClick={handleRoutePhones}
                            className="categories__phones--image block__image phones"
                            src={`${STATIC_URL}/home/image-6.png`}
                            alt="Phones category"
                        />
                        <h3
                            className="categories__phones--title categories__title"
                            onClick={handleRoutePhones}
                        >
                            Phones
                        </h3>
                        <p className="categories__phones--count categories__count">{phones} models</p>
                    </article>
                    <article className="categories__tablets block">
                        <img
                            onClick={handleRouteTablets}
                            className="categories__tablets--image block__image tablets"
                            src={`${STATIC_URL}/home/image-5.png`}
                            alt="Tablets category"
                        />
                        <h3
                            className="categories__tablets--title categories__title"
                            onClick={handleRouteTablets}
                        >
                            Tablets
                        </h3>
                        <p className="categories__tablets--count categories__count">{tablets} models</p>
                    </article>
                    <article className="categories__accessories block">
                        <img
                            onClick={handleRouteAccessories}
                            className="categories__accessories--image block__image accessories"
                            src={`${STATIC_URL}/home/image-7.png`}
                            alt="Accessories category"
                        />
                        <h3
                            className="categories__accessories--title categories__title"
                            onClick={handleRouteAccessories}
                        >
                            Accessories
                        </h3>
                        <p className="categories__accessories--count categories__count">{accessories} models</p>
                    </article>
                </div>
            </section>
            <section className="hot-prices">
                <div className="hot-prices__title title">
                    <h1 className="hot-prices__title--value">Hot prices</h1>
                    <div className="hot-prices__title--buttons">
                        <div className="hot-prices__button-left">
                            <MdOutlineKeyboardArrowLeft />
                        </div>
                        <div className="hot-prices__button-right">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </div>
                </div>
                <div className="hot-prices__swiper">
                    <Swiper
                        modules={[Navigation, A11y, Autoplay]}
                        autoplay
                        loop
                        spaceBetween={20}
                        breakpoints={SLIDER_BREAKPOINTS}
                        navigation={{
                            nextEl: '.hot-prices__button-right',
                            prevEl: '.hot-prices__button-left',
                        }}
                    >
                        {hotPrices.map(product => (
                            <SwiperSlide key={`hot-prices-${product.id}`}>
                                <Card product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </main>
    )
}

export default HomePage;

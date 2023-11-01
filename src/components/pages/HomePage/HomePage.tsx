import React, { useEffect } from 'react';
import './HomePage.scss';
import Banner from '../../Banner/Banner';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectDiscountProducts, selectNewProducts } from '../../../store/products/selectors';
import { getDiscountProductsThunk, getNewProductsThunk } from '../../../store/products/thunks';
import Card from '../../Card/Card';
import { SLIDER_BREAKPOINTS } from '../../../constants/core';


const RebuildHomePage = () => {
    const dispatch = useAppDispatch();
    const newProducts = useAppSelector(selectNewProducts)
    const hotPrices = useAppSelector(selectDiscountProducts);

    useEffect(() => {
        dispatch(getNewProductsThunk())
        dispatch(getDiscountProductsThunk());
    }, []);

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
                        autoplay
                        loop
                        breakpoints={SLIDER_BREAKPOINTS}
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
            </section>
            <section className="categories">
                <h1 className="categories__title title">Shop by category</h1>
                <div className="categories__wrapper">
                    <article className="categories__phones block">
                        <div className="categories__phones--image block__image phones"></div>
                        <h3 className="categories__phones--title categories__title">Phones</h3>
                        <p className="categories__phones--count categories__count">Count models</p>
                    </article>
                    <article className="categories__tablets block">
                        <div className="categories__tablets--image block__image tablets"></div>
                        <h3 className="categories__tablets--title categories__title">Tablets</h3>
                        <p className="categories__tablets--count categories__count">Count models</p>
                    </article>
                    <article className="categories__accessories block">
                        <div className="categories__accessories--image block__image accessories"></div>
                        <h3 className="categories__accessories--title categories__title">Accessories</h3>
                        <p className="categories__accessories--count categories__count">Count models</p>
                    </article>
                </div>
            
            </section>
            <section className="hot-prices">
                <div className="hot-prices__title title">
                    <h1 className="hot-prices__title--value">Brand new model</h1>
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
                        breakpoints={SLIDER_BREAKPOINTS}
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
            </section>
        </main>
    )
}

export default RebuildHomePage;

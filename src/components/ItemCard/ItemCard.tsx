import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './ItemCard.scss';
import Button from '../Button/Button';
import Heart from '../Heart/Heart';
import { addFavouriteThunk, getCurrentProductThunk, getDiscountProductsThunk, removeFavouriteThunk } from '../../store/products/thunks';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCurrentProduct, selectDiscountProducts, selectFavorites } from '../../store/products/selectors';
import { BASE_URI, SLIDER_BREAKPOINTS } from '../../constants/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Card from '../Card/Card';
import { selectCart } from '../../store/cart/selectors';
import PageNavigation from '../PageNavigation/PageNavigation';
import { normalizeQuery } from '../../utils/functions';
import { CartProduct, CurrentProduct, Product } from '../../types/product.types';
import BackButton from '../BackButton/BackButton';
import { addToFavourites, removeFromFavourites } from '../../store/products/slice';
import { shallowEqual, useSelector } from 'react-redux';
import { addToCart } from '../../store/cart/slice';


const ItemCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct) as CurrentProduct;
  const navigate = useNavigate();
  const { id } = useParams();
  const capacityWithColor = product?.id.split(product.namespaceId) || ['', ''];
  const hotPrices = useAppSelector(selectDiscountProducts);
  console.log(product)

  let currentColor = product?.color || 'null';

  if (product?.color.includes(' ')) {
    currentColor = product?.color.split(' ').join('-');
  }

  const availibleColors = product?.colorsAvailable.map(color => {
    if (color.includes(' ')) {
      return color.split(' ').join('-');
    }
    return color;
  }) || [''];

  const cart: CartProduct[] = useAppSelector(selectCart);
  const isSelected = useMemo(() => cart.some(({ id }) => id === product?.productPassport.id), [cart]);
  const favourites: Product[] = useSelector(selectFavorites, shallowEqual);
  const isFavourite = useMemo(() => {
    return favourites.some(({ id }) => id === product?.productPassport.id);
  }, [favourites, id]);
  const user = useAppSelector(state => state.auth.user);

  const addItemToCart = useCallback((e: any) => {
    e.stopPropagation()

    if (!isSelected) {
      dispatch(addToCart(product.productPassport));

      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }, [isSelected, cart])

  const handleFavourites = useCallback(() => {
    if (user) {
      if (isFavourite) {
        dispatch(removeFavouriteThunk(product.productPassport.id));
      } else {
        dispatch(addFavouriteThunk(product.productPassport.id));
      }
    } else {
      if (isFavourite) {
        dispatch(removeFromFavourites(product));
        const updatedFavourites = favourites.filter((favProduct) => favProduct.id !== product.productPassport.id);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      } else {
        dispatch(addToFavourites(product));
        const updatedFavourites = [...favourites, product];
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      }
    }
  }, [user, isFavourite]);


  const actualCapacity = capacityWithColor[1].split('-')[1];
  console.log(product);


  useEffect(() => {
    dispatch(getCurrentProductThunk(id as string))
      .unwrap()
      .catch(e => {
        // TODO
        console.log(e);
        navigate('/');
      });
    dispatch(getDiscountProductsThunk());
  }, [id]);

  const [mainImage, setMainImage] = useState(0);

  return (
    product && (
      <div className='item-card'>
        <div className="item-card__nav">
          {/* <a href="/" className="item-card__nav-icon">
            <img src="https://i.imgur.com/WmTuk3L.png" alt="home" />
          </a>
          <img
            src="https://i.imgur.com/zNeLDRA.png"
            alt="arrow-right"
            className="item-card__nav-icon" />

          <a href="/phones" className="item-card__nav-textPhones">
            Phones
          </a>
          <img
            src="https://i.imgur.com/zNeLDRA.png"
            alt="arrow-right"
            className="item-card__nav-icon" />

          <a href="#" className="item-card__nav-textPhone">
            {product?.name}
          </a> */}
          <PageNavigation productsType={normalizeQuery('phones')} productName={product?.name} />
        </div>
        <div className="item-card__back-wrapper">
          <BackButton />
        </div>
        <p className="item-card__title">
          {product?.name}
        </p>

        <div className="container">
          <div className="container__images">
            <div className="container__images-main-img">
              <img className="container__images-main"
                src={`${BASE_URI}/${product.images[mainImage]}`}
                alt="phone"
              />
            </div>

            <div className="container__images-miniatures">
              {product?.images.map((image, index) => {
                if (mainImage === index) {
                  return (
                    <div key={index} className="container__images-miniatures-cont">
                      <img
                        className="container__images-miniatures-item"
                        style={{ border: `1px solid #000` }}
                        src={`${BASE_URI}/${image}`}
                        alt="phone"
                        onClick={() => { setMainImage(index) }}
                      />
                    </div>
                  )
                }
                return (
                  <div key={index} className="container__images-miniatures-cont">
                    <img
                      className="container__images-miniatures-item"
                      src={`${BASE_URI}/${image}`}
                      alt="phone"
                      onClick={() => { setMainImage(index) }}
                    />
                  </div>
                )
              })}


            </div>
          </div>

          <div className="container__info">
            <div className="container__info-availible">
              <span className="container__info-availible-title">
                Available colors
              </span>
              <span className="container__info-availible-Id">
                {`ID: ${id}`}
              </span>
            </div>

            <div className="container__info-colors">
              {availibleColors.map((color, ind) => {
                if (color === currentColor) {
                  return (
                    <button
                      className="container__info-colors-color"
                      style={{
                        backgroundColor: `${color}`,
                        border: `2px solid #000`,
                        cursor: 'not-allowed',
                      }}
                      disabled
                      key={ind}
                    />
                  )
                }
                return (
                  <button
                    className="container__info-colors-color"
                    onClick={() => {
                      navigate(`/${product.namespaceId}-${actualCapacity}-${color}`);
                    }}
                    style={{ backgroundColor: `${color}` }}
                    key={ind}
                  />
                )
              })}
            </div>

            <hr />

            <div className="container__info-capcity">
              <div className="container__info-capcity-title">
                Select capacity
              </div>

              <div className="container__info-capcity-set">
                {product?.capacityAvailable.map((value, ind) => {
                  if (actualCapacity === value.toLowerCase()) {
                    return (
                      <button
                        className="gB"
                        key={ind}
                        style={{
                          border: `2px solid #000`,
                          cursor: 'not-allowed',
                        }}
                      >
                        {value}
                      </button>
                    )
                  }
                  return (
                    <button
                      className="gB"
                      key={ind}
                      onClick={() => {
                        navigate(`/${product.namespaceId}-${value.toLowerCase()}-${product.color}`);
                      }}
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      {value}
                    </button>
                  )
                })}
              </div>
            </div>

            <hr />

            <div className="container__info-price">
              <p className="container__info-price-actual">
                {`$${product?.priceDiscount}`}
              </p>

              <p className="container__info-price-sale">
                {`$${product?.priceRegular}`}
              </p>
            </div>

            <div className="container__info-cart">
              <Button
                isSelected={isSelected}
                text={isSelected ? 'Added to to cart' : 'Add to cart'}
                handleClick={addItemToCart}
              />
              <Heart handleClick={handleFavourites} isFavourite={isFavourite} />
            </div>

            <div className="container__info-description">
              <div className="description-item">
                <span className="description-item-title">
                  Screen
                </span>
                <span className="description-item-value">
                  {product?.screen}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  Resolution
                </span>
                <span className="description-item-value">
                  {product?.resolution}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  Processor
                </span>
                <span className="description-item-value">
                  {product?.processor}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  RAM
                </span>
                <span className="description-item-value">
                  {product?.ram}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="main-item">
          <div className="main-item__about">
            <p className="main-item__about-title">
              About
            </p>

            <hr />

            {product?.description.map((descript, ind) => {
              return (
                <div key={ind} className="main-item__about-chapter">
                  <p className="main-item__about-chapter-title">
                    {descript.title}
                  </p>

                  <p className="main-item__about-chapter-description">
                    {descript.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="main-item__specs">
            <p className="main-item__specs-title">
              Tech specs
            </p>

            <hr />

            <div className="main-item__specs-description">
              <div className="description-item">
                <span className="description-item-title">
                  Screen
                </span>
                <span className="description-item-value">
                  {product?.screen}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  Resolution
                </span>
                <span className="description-item-value">
                  {product?.resolution}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  Processor
                </span>
                <span className="description-item-value">
                  {product?.processor}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  RAM
                </span>
                <span className="description-item-value">
                  {product?.ram}
                </span>
              </div>

              <div className="description-item">
                <span className="description-item-title">
                  Built in memory
                </span>
                <span className="description-item-value">
                  {product?.capacity}
                </span>
              </div>

              {product?.camera && (
                <div className="description-item">
                  <span className="description-item-title">
                    Camera
                  </span>
                  <span className="description-item-value">
                    {product?.camera}
                  </span>
                </div>
              )}

              {product?.zoom && (
                <div className="description-item">
                  <span className="description-item-title">
                    Zoom
                  </span>
                  <span className="description-item-value">
                    {product?.zoom}
                  </span>
                </div>
              )}

              <div className="description-item">
                <span className="description-item-title">
                  Cell
                </span>

                <span className="description-item-value">
                  {product?.cell}
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="hot-prices">
          <div className="hot-prices__title title">
            <h1 className="hot-prices__title--value">You may also like!</h1>
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
              {hotPrices.map(productt => (
                <SwiperSlide key={`${product.id}123`}>
                  <Card product={productt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    )
  )
};

export default ItemCard;

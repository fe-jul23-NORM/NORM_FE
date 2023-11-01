import React, { useEffect, useState } from 'react';
import './ItemCard.scss';
import Button from '../Button/Button';
import Heart from '../Heart/Heart';
import { getCurrentProductThunk } from '../../store/products/thunks';
import { useAppDispatch, useAppSelector } from '../../store';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { selectCurrentProduct } from '../../store/products/selectors';
import { BASE_URI } from '../../constants/core';


const ItemCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);
  const navigate = useNavigate();
  const { id } = useParams();
  const capacityWithColor = product?.id.split(product.namespaceId) || ['', ''];
  
 
  const actualCapacity = capacityWithColor[1].split('-')[1];
  console.log(product);


  useEffect(() => {
    dispatch(getCurrentProductThunk(id as string))
      .unwrap()
      .catch(e => {
        // TODO
        console.log(e);
        navigate('/');
      })
  }, []);

  const [mainImage, setMainImage] = useState(0);
  return (
    product && (
      <div className='item-card'>
        <div className="item-card__nav">
          <a href="/" className="item-card__nav-icon">
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
          </a>
        </div>
        <div className="item-card__back">
          <img
            src="https://i.imgur.com/dB7Z9gF.png"
            alt="arrow-right"
            className="item-card__back-icon" />

          <a href="/Phones" className="item-card__back-text">
            Back
          </a>
        </div>
        <p className="item-card__title">
          {product?.name}
        </p>

        <div className="container">
          <div className="container__images">
            <img className="container__images-main"
              src={`${BASE_URI}/${product.images[mainImage]}`}
              alt="phone"
            />

            <div className="container__images-miniatures">
              {product?.images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className="container__images-miniatures-item"
                    src={`${BASE_URI}/${image}`}
                    alt="phone"
                    onClick={() => { setMainImage(index) }}
                  />
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
              {product?.colorsAvailable.map((color, ind) => (
                <button
                  className="container__info-colors-color"
                  onClick={() => {
                    navigate(`/${product.namespaceId}-${actualCapacity}-${color}`);
                    window.location.reload();
                  }}
                  style={{ backgroundColor: `${color}` }}
                  key={ind}
                />
              ))}
            </div>

            <hr />

            <div className="container__info-capcity">
              <div className="container__info-capcity-title">
                Select capacity
              </div>

              <div className="container__info-capcity-set">
                {product?.capacityAvailable.map((value, ind) => (
                  <button
                    className="gB"
                    key={ind}
                    onClick={() => {
                      navigate(`/${product.namespaceId}-${value.toLowerCase()}-${product.color}`);
                      window.location.reload();
                    }}
                  >
                    {value}
                  </button>
                ))}
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
              <div className="container__info-cart-button">
                {/* <Button /> */}
              </div>

              <div className="container__info-cart-favourite">
                {/* <Heart /> */}
              </div>
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
      </div>
    )
  )
};

export default ItemCard;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banner.scss';
import { Pagination, Navigation, Autoplay, A11y } from 'swiper/modules';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import React from 'react';
import { STATIC_URL } from '../../constants/core';

export const Banner: React.FC = () => {
  const banners = ['banner1.png', 'banner2.jpg', 'banner3.jpeg', 'banner4.png', 'banner5.png'];

  return (
    <div className="banner__slider">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, A11y]}
        slidesPerView={1}
        autoplay
        loop
        navigation={{
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}

      >
        {banners.map((banner) => {
          return (
            <SwiperSlide key={banner}>
              <img src={`${STATIC_URL}/${banner}`} alt="banner" />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="arrow-left">
        <MdOutlineKeyboardArrowLeft />
      </div>
      <div className="arrow-right">
        <MdOutlineKeyboardArrowRight />
      </div>
      <div className="custom-pagination" />
    </div>
  );
};

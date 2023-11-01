import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './Banner.scss';

import { Pagination, Navigation, Autoplay, A11y } from 'swiper/modules';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import React from 'react';

const Banner: React.FC = () => {
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
        <SwiperSlide>
          <img src="https://github.com/mate-academy/product_catalog/blob/main/public/img/banner-phones.png?raw=true" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/fO6RD9f.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://github.com/mate-academy/product_catalog/blob/main/public/img/category-accessories.png?raw=true" alt="banner" />
        </SwiperSlide>
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

export default Banner;

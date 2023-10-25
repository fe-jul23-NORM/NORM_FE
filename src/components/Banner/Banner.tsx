import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.scss';

import { Pagination, Navigation, Autoplay, A11y } from 'swiper/modules';

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const Bunner: React.FC = () => {
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
          <img src="https://i.imgur.com/CbH8vf0.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/fO6RD9f.jpg" alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.imgur.com/8OsadCk.png" alt="banner" />
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

export default Bunner;
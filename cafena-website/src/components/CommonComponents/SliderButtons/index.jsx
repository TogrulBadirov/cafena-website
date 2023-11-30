import React from 'react';
import { useSwiper } from 'swiper/react';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import './index.scss'
export const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button className='nav_btn_prev' onClick={() => swiper.slidePrev()}>
      <FaArrowLeft />
      </button>
      <button className='nav_btn_next' onClick={() => swiper.slideNext()}>
      <FaArrowRight />
      </button>
    </div>
  );
};

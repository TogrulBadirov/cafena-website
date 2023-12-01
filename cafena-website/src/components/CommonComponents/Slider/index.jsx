import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, A11y } from "swiper/modules";
import { SliderButtons } from "../SliderButtons";
import Slide from "../Slide";
import "./index.scss";

const Slider = () => {
  return (
    <div id="slider">
      <Swiper
        navigation={true}
        modules={[Navigation, A11y]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            slideLogo="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
            userReview="Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!"
            userImg="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
            userName="Rasalina De Willamson"
            userPosition="Founder & co"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            slideLogo="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
            userReview="Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!"
            userImg="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
            userName="Rasalina De Willamson"
            userPosition="Founder & co"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            slideLogo="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
            userReview="Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!"
            userImg="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
            userName="Rasalina De Willamson"
            userPosition="Founder & co"
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <Slide
            slideLogo="https://xpressrow.com/html/cafena/cafena/assets/images/icons/t-quote.png"
            userReview="Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!"
            userImg="https://xpressrow.com/html/cafena/cafena/assets/images/author/tm-author.png"
            userName="Rasalina De Willamson"
            userPosition="Founder & co"
          />
        </SwiperSlide>
        <SliderButtons />
      </Swiper>
    </div>
  );
};

export default Slider;

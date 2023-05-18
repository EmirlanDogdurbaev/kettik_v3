import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import classes from "./Slider.module.scss";
SwiperCore.use([Virtual, Navigation, Pagination]);

const Slider = () => {
  const id = 1;
  return (
    <>
      <Swiper
        slidesPerView={3.2}
        centeredSlides={true}
        spaceBetween={40}
        navigation={true}
      >
        <SwiperSlide>
          <article className={classes.TourCard}>
            <div>
              <h1>Lorem, ipsum.</h1>
              <Link to={`/tours/tour/${id}`}> See more</Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.TourCard}>
            <div>
              <h1>Lorem, ipsum.</h1>
              <Link to={`/tour/${id}`}> See more</Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.TourCard}>
            <div>
              <h1>Lorem, ipsum.</h1>
              <Link to={`/tours/tour/${id}`}> See more</Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.TourCard}>
            <div>
              <h1>Lorem, ipsum.</h1>
              <Link to={`/tours/tour/${id}`}> See more</Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.TourCard}>
            <div>
              <h1>Lorem, ipsum.</h1>
              <Link to={`/tours/tour/${id}`}> See more</Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.TourCard}>
            <div>
              <h1>Lorem, ipsum.</h1>
              <Link to={`/tours/tour/${id}`}> See more</Link>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

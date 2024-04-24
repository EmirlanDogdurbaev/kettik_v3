import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import classes from "./Slider.module.scss";
import axios from "axios";
SwiperCore.use([Virtual, Navigation, Pagination]);

const Slider = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/tours")
      .then((response) => {
        setTours(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных туров:", error);
      });
  }, []);

  console.log(tours);

  const tour = tours.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <article
          className={classes.TourCard}
          style={{ backgroundImage: `url(${item.image})`, backgroundSize:"cover" }}
        >
          <div>
            <h1>{item.title}</h1>
            <Link to={`/tours/${item.id}`}> See more</Link>
          </div>
        </article>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        slidesPerView={3.2}
        centeredSlides={true}
        spaceBetween={40}
        navigation={true}
      >
       {tour}
      </Swiper>
    </>
  );
};

export default Slider;

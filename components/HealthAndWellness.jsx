import React from "react";
import style from "@/styles/components/healthAndWellness.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HealthAndWellness = () => {
  const images = ["hw_1.png", "hw_2.png", "hw_3.png", "hw_4.png"];

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <h2 className="section_heading">Health and wellness</h2>
        <p className="para">
          Our club offers an exceptional experience for its members, featuring
          diverse dining options, gym, and a luxurious locker room with a
          jacuzzi and shower area. Riyadh Golf Club is the perfect destination
          for enjoying time with family and friends.
        </p>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            580: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          className={`swiper_container wrapper ${style.swiper_container}`}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="slider">
              <img src={image} alt="" className="img_cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HealthAndWellness;

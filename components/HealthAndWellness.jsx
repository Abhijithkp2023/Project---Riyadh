import React, { useEffect, useState } from "react";
import style from "@/styles/components/healthAndWellness.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

const HealthAndWellness = () => {
  const [direction, setDirection] = useState("ltr");

  const { t, i18n } = useTranslation("common");
  const images = ["/hw_1.png", "/hw_2.png", "/hw_3.png", "/hw_4.png"];

  useEffect(() => {
    const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
  }, [i18n.language]);

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <h2 className="section_heading" data-aos="fade-up">{t("health_and_wellness.heading")}</h2>
        <p className="para">{t("health_and_wellness.para")}</p>
        <Swiper
          key={direction}
          dir={direction}
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
            <SwiperSlide key={index + direction} className="slider">
              <img src={image} alt="" className="img_cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HealthAndWellness;

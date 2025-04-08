import React, { useEffect, useRef, useState } from "react";
import style from "@/styles/components/dining.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

const Dining = () => {
  const { t , i18n} = useTranslation("common");
   const swiperRef = useRef(null);
    const [direction, setDirection] = useState("ltr");


   useEffect(() => {
        const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
        setDirection(newDirection);
    
        if (swiperRef.current) {
          setTimeout(() => {
            swiperRef.current.rtlTranslate = newDirection === "rtl";
            swiperRef.current.update();
          }, 300);
        }
      }, [i18n.language]);

  return (
    <div className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className={style.text_container}>
          <h2 className="section_heading">{t("dining.heading")}</h2>
          <p className="para">{t("dining.para")}</p>
        </div>

        <div className="event_img_container">
          {[
            ["/dining_1.png", "/event_img_2.png", 3000],
            ["/dining_2.png", "/event_img_3.png", 4000],
            ["/dining_3.png", "/event_img_2.png", 5000],
          ].map(([img1, img2, delay], index) => (
            <Swiper
                key={`${direction}-${index}`}
              effect="flip"
              grabCursor
              modules={[EffectFlip, Autoplay]}
              className="mySwiper"
              autoplay={{ delay, disableOnInteraction: false }}
                dir={direction}
              speed={3000}
              loop
            >
              <SwiperSlide>
                <img src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
              </SwiperSlide>
            </Swiper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dining;

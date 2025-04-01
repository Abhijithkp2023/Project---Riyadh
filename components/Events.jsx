import React, { useEffect, useState } from "react";
import eventsStyle from "@/styles/components/events.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t, i18n } = useTranslation("common");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return (
    <div className={`${eventsStyle.events_container}`}>
      <div className={eventsStyle.event_sub_container}>
        <div className={eventsStyle.event_text_container}>
          <h2 data-aos="fade-up">{t("event.event_heading")}</h2>
          <p data-aos="fade-up">{t("event.event_para")}</p>
          <button className="dark_button" data-aos="fade-up">
            <p>{t("event.read_more_btn")}</p>
            <div className="button_round">
              <div>
                <svg
                width="11"
                height="17"
                viewBox="0 0 11 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3731 8.95553L9.41344 8.07654L1.57473 0.910156L0.650452 1.75385L8.46127 8.94713L0.680212 16.0614L1.61007 16.9102L9.41716 9.82444L9.41902 9.8278L10.3731 8.95553Z"
                  fill="currentColor"
                />
                <path
                  d="M6 8.91002L-9.66342e-08 14.1062L3.57628e-07 3.71387L6 8.91002Z"
                  fill="currentColor"
                />
              </svg>
              </div>
            </div>
          </button>
        </div>

        <div className={eventsStyle.event_img_container}>
          {[
            ["./event_img_1.png", "./event_img_2.png", 3000],
            ["./event_img_2.png", "./event_img_3.png", 4000],
            ["./event_img_3.png", "./event_img_2.png", 5000],
          ].map(([img1, img2, delay], index) => (
            <Swiper
              key={`${direction}-${index}`}
              effect="flip"
              grabCursor
              modules={[EffectFlip, Autoplay]}
              className={`${eventsStyle.swiper_3d} mySwiper`}
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

export default Events;

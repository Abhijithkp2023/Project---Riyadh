import React, { useEffect, useRef, useState } from "react";
import style from "@/styles/components/padel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

const Padel = () => {
  const { t, i18n } = useTranslation("common");
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
    <section className={`${style.container} pb_100 pt_100`}>
      <div className={style.wrapper}>
        <div className="event_img_container">
          {[
            ["/padel_1.png", "/padel_2.png", 3000],
            ["/padel_2.png", "/padel_3.png", 4000],
            ["/padel_3.png", "/padel_1.png", 5000],
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
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
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
        <div className={style.right_timing_container}>
          <div>
            <h2 className="section_heading">{t("padel.heading")}</h2>
          </div>

          <div>
            <p className="para">{t("padel.para")}</p>
          </div>

          <ul className={style.timing_table}>
            <li>
              <div>
                <div className={style.block}>
                  <img src="/clock.svg" alt="" />
                  <p>
                    <span>{t("padel.sunday")}</span> to <span>{t("padel.monday")}</span> <br />
                    {t("padel.time")}
                  </p>
                </div>
                <div className={style.block}>
                  <img
                    src="/timing_center.svg"
                    alt=""
                    style={{ width: "15px", margin: "auto" }}
                  />
                </div>
                <div className={style.block}>
                  <img src="/clock.svg" alt="" />
                  <p>
                    <span>{t("padel.sunday")}</span> to <span>{t("padel.monday")}</span> <br />
                    {t("padel.time")}
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div>
                <p>
                  {t("padel.60min")} <br />
                  <span>{t("padel.price_60")}</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  {t("padel.90min")} <br />
                  <span>{t("padel.price_90")}</span>
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  {t("padel.120min")} <br />
                  <span>{t("padel.price_120")}</span>
                </p>
              </div>
            </li>
          </ul>

          <button className="dark_button" data-aos="fade-up">
            <p>{t("padel.book_button")}</p>
            <div className="button_round">
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
          </button>
        </div>
      </div>
    </section>
  );
};

export default Padel;
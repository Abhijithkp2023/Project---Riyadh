import React, { useEffect, useState } from "react";
import style from "@/styles/components/padel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

const Padel = () => {
  const { t, i18n } = useTranslation("common");
  
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
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
              data-aos="fade-up"
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
            <h2 className="section_heading" data-aos="fade-up">{t("padel.heading")}</h2>
          </div>

          <div data-aos="fade-up">
            <p className="para">{t("padel.para")}</p>
          </div>

          <ul className={style.timing_table} data-aos="fade-up">
            <li>
              <div>
                <div className={style.block} data-aos="fade-up">
                  <img src="/clock.svg" alt="" />
                  <p>
                    <span>{t("padel.sunday")}</span> to{" "}
                    <span>{t("padel.monday")}</span> <br />
                    {t("padel.time")}
                  </p>
                </div>
                <div className={style.block} data-aos="fade-up">
                  <img
                    src="/timing_center.svg"
                    alt=""
                    style={{ width: "15px", margin: "auto" }}
                  />
                </div>
                <div className={style.block} data-aos="fade-up">
                  <img src="/clock.svg" alt="" />
                  <p>
                    <span>{t("padel.sunday")}</span> to{" "}
                    <span>{t("padel.monday")}</span> <br />
                    {t("padel.time")}
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div data-aos="fade-up">
                <p>
                  {t("padel.60min")} <br />
                  <span>{t("padel.price_60")}</span>
                </p>
              </div>
            </li>
            <li>
              <div data-aos="fade-up">
                <p>
                  {t("padel.90min")} <br />
                  <span>{t("padel.price_90")}</span>
                </p>
              </div>
            </li>
            <li>
              <div data-aos="fade-up">
                <p>
                  {t("padel.120min")} <br />
                  <span>{t("padel.price_120")}</span>
                </p>
              </div>
            </li>
          </ul>

          <Link
            href="#"
            className="dark_button"
            data-aos="fade-up"
          >
            <label>{t("night_golf.btn_text")}</label>
            <span>
              <Image
                src="/btn_icon.png"
                width={70}
                height={70}
                alt="button image"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Padel;

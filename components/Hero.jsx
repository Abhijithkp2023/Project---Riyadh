import React, { useState, useRef, useEffect } from "react";
import heroStyle from "@/styles/components/hero.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { i18n, t } = useTranslation("common");

  const [slides, setSlides] = useState([]);
  const [activeText, setActiveText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
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

  useEffect(() => {
    const updatedSlides = [
      {
        type: "video",
        src: "/hero_video_1.mp4",
        text: t("hero.hero_text_1"),
      },
      {
        type: "image",
        src: "/details_main_bg.png",
        text: t("hero.hero_text_2"),
      },
      {
        type: "video",
        src: "/hero_video_1.mp4",
        text: t("hero.hero_text_1"),
      },
      {
        type: "image",
        src: "/details_main_bg.png",
        text: t("hero.hero_text_2"),
      },
    ];
    setSlides(updatedSlides);
  }, [i18n.language]);

  useEffect(() => {
    if (slides.length > 0) {
      setActiveText(slides[0].text);
    }
  }, [slides]);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
    setActiveText(slides[realIndex]?.text);
  };

  const handlePaginationClick = (index) => {
    console.log(swiperRef);

    swiperRef.current?.slideToLoop(index);
  };

  useEffect(() => {
    if (swiperRef.current && paginationRef.current) {
      const bullets = Array.from(paginationRef.current.children);
      bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => handlePaginationClick(index));
      });
      return () => {
        bullets.forEach((bullet, index) => {
          bullet.removeEventListener("click", () =>
            handlePaginationClick(index)
          );
        });
      };
    }
  }, []);

  return (
    <div className={heroStyle.container}>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        // pagination={{ clickable: true }}
        dir={direction}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        speed={1000}
        onSlideChange={handleSlideChange}
        className={`${heroStyle.swiper} my-swiper`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={heroStyle.slide}>
            {slide.type === "video" ? (
              <video className={heroStyle.bg} autoPlay loop muted playsInline>
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                className={heroStyle.bg}
                src={slide.src}
                alt={`Slide ${index}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div ref={paginationRef} className={heroStyle.custom_pagination}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${heroStyle.bullet} ${
              index === activeIndex ? heroStyle.active : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>

      <div className={heroStyle.text_container}>
        <h1 key={activeText} className={heroStyle.fade_in}>
          {activeText}
        </h1>
        <button className="light_button">
          <p>{t("hero.btn_text")}</p>
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

      <button
        className={heroStyle.swiper_button_right}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <div className="">
          <img src="./arrow_big.svg" />
        </div>
      </button>
      <button
        className={heroStyle.swiper_button_left}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <div className="">
          <img src="./arrow_big.svg" />
        </div>
      </button>
    </div>
  );
};

export default Hero;

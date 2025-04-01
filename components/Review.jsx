import React, { useEffect, useRef, useState } from "react";
import reviewStyle from "@/styles/components/review.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

const Review = () => {
  const { i18n, t } = useTranslation("common");
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

  const reviewers = [
    {
      id: 1,
      reviewKey: "review_1",
      name: "Michael P.",
      titleKey: "professional",
      image: "./reviewer_1.png",
    },
    {
      id: 2,
      reviewKey: "review_2",
      name: "David H.",
      titleKey: "enthusiast",
      image: "./reviewer_2.png",
    },
    {
      id: 3,
      reviewKey: "review_3",
      name: "Sarah L.",
      titleKey: "amateur",
      image: "./reviewer_3.png",
    },
    {
      id: 4,
      reviewKey: "review_1",
      name: "David H.",
      titleKey: "enthusiast",
      image: "./reviewer_4.png",
    },
    {
      id: 5,
      reviewKey: "review_2",
      name: "Michael P.",
      titleKey: "professional",
      image: "./reviewer_1.png",
    },
    {
      id: 6,
      reviewKey: "review_1",
      name: "Michael P.",
      titleKey: "professional",
      image: "./reviewer_1.png",
    },
    {
      id: 7,
      reviewKey: "review_3",
      name: "Sarah L.",
      titleKey: "amateur",
      image: "./reviewer_3.png",
    },
    {
      id: 8,
      reviewKey: "review_2",
      name: "David H.",
      titleKey: "enthusiast",
      image: "./reviewer_2.png",
    },
    {
      id: 9,
      reviewKey: "review_3",
      name: "Sarah L.",
      titleKey: "amateur",
      image: "./reviewer_3.png",
    },
    {
      id: 10,
      reviewKey: "review_3",
      name: "Sarah L.",
      titleKey: "amateur",
      image: "./reviewer_3.png",
    },
  ];

  return (
    <div className={reviewStyle.container}>
      <div className={reviewStyle.header_container}>
        <h2>{t("reviews.main_heading")}</h2>
      </div>

      <Swiper
        key={direction}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          disableOnInteraction: false,
        }}
        dir={direction}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          580: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        speed={200}
      >
        {reviewers.map((review) => (
          <SwiperSlide key={review.id} className={reviewStyle.slides}>
            <div
              className={`${reviewStyle.quote_container} ${
                direction === "rtl" ? reviewStyle.rtl : ""
              }`}
            >
              <img src="./quote.svg" alt="quote" />
            </div>
            <p>{t(`reviews.${review.reviewKey}`)}</p>
            <div className={reviewStyle.reviewer_info}>
              <div>
                <img src={review.image} alt={review.name} />
              </div>
              <div>
                <h5>{review.name}</h5>
                <span>{t(`reviews.titles.${review.titleKey}`)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`${reviewStyle.button_container} ${
          direction === "rtl" ? reviewStyle.rtl : ""
        }`}
      >
        <button
          className={`${reviewStyle.swiper_button_right}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <div className="">
            <img src="./arrow_big.svg" />
          </div>
        </button>
        <button
          className={reviewStyle.swiper_button_left}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <div className="">
            <img src="./arrow_big.svg" />
          </div>
        </button>
      </div>
{/* 
      <div className="img_left">
        <img src="./about_decor_left.png" alt="" />
      </div>
      <div className="img_right">
        <img src="./about_decor_right.png" alt="" />
      </div> */}
    </div>
  );
};

export default Review;

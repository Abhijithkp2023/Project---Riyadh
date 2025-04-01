import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import facilitiesStyle from "@/styles/components/facilities.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { useTranslation } from "react-i18next";

const Facilities = () => {
  const { i18n, t } = useTranslation("common");
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

  const swiperRef = useRef(null);

  const facilities = [
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fshutterstock_2479838625.jpg&w=3840&q=75",
      title: t("facilities.memberships"),
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fser_02.jpg&w=3840&q=75",
      title: t("facilities.golf_by_Night"),
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fde34d960-d6e9-4f1a-9592-824f9f7669b6.jpg&w=3840&q=75",
      title: t("facilities.padel"),
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2Fa521f4d1-ead3-442d-893b-f11240e3387c.jpg&w=3840&q=75",
      title: t("facilities.pro_Shop"),
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2F5.12.24_SI2024_Neville-Hopwood-9633-scaled-1.jpg&w=3840&q=75",
      title: t("facilities.dining"),
    },
    {
      image:
        "https://riyadhgolf.com/_next/image?url=https%3A%2F%2Friyadhgolf.e8demo.com%2Fwp-content%2Fuploads%2F2025%2F02%2FDriving-Range-scaled-1.jpg&w=3840&q=75",
      title: t("facilities.driving_Range"),
    },
  ];

  return (
    <div className={facilitiesStyle.container} data-aos="fade-up">
      <ul className={facilitiesStyle.facilities_grid}>
        {facilities.map((facility, i) => (
          <li key={i}>
            <a href="#">
              <img src={facility.image} alt={facility.title} loading="lazy" />
              <h4>{facility.title}</h4>
            </a>
          </li>
        ))}
      </ul>

      {/* <div className={facilitiesStyle.facilities_slide}> */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        dir={direction}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay, Pagination]}
        speed={1000}
        className={facilitiesStyle.facilities_slide_conatiner}
        style={{
          "--swiper-pagination-color": "#805E59",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
      >
        {facilities.map((facility, i) => (
          <SwiperSlide key={i} className={facilitiesStyle.slide}>
            <div key={i}>
              <a href="#">
                <img src={facility.image} alt={facility.title} loading="lazy" />
                <h4>{facility.title}</h4>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    // </div>
  );
};

export default Facilities;

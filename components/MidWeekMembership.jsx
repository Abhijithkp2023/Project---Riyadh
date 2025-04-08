import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MidWeekMembership = () => {
  const [direction, setDirection] = useState("ltr");
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation("common");

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

  const membershipData = [
    {
      imgSrc: "/midweek_1.png",
      title: "midweek_membership.family_midweek",
      price: "36,495 SAR",
    },
    {
      imgSrc: "/midweek_2.png",
      title: "midweek_membership.couple_midweek",
      price: "33,495 SAR",
    },
    {
      imgSrc: "/midweek_3.png",
      title: "midweek_membership.single_midweek",
      price: "46,408 SAR",
    },
    {
      imgSrc: "/midweek_4.png",
      title: "midweek_membership.corporate",
      price: "46,408 SAR",
    },
  ];

  return (
    <div
      style={{ width: "100vw", background: "#F5EDE6", marginBottom: "2px" }}
      className="pb_100 pt_100"
    >
      <div className="wrapper">
        <h3 className="section_header" data-aos="fade-up">
          Midweek Memberships
        </h3>

        <Swiper
          slidesPerView={1}
          key={direction}
          dir={direction}
          breakpoints={{
            580: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
          spaceBetween={50}
          className="swiper_container wrapper"
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          {membershipData.map((membership, index) => (
            <SwiperSlide
              className="slider"
              data-aos="fade-up"
              key={`${index}-${direction}`}

            >
              <Link href="#">
                <img src={membership.imgSrc} alt="" className="img_cover" />
                <div className="text_container">
                  <h5>{t(membership.title)}</h5>
                  <h6>{membership.price}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MidWeekMembership;

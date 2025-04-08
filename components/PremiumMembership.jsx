import React, { useEffect, useRef, useState } from "react";
import style from "@/styles/components/premiumMembership.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PremiumMembership = () => {
  const [direction, setDirection] = useState("ltr");
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
  }, [i18n.language]);

  const membershipData = [
    {
      imgSrc: "/premium_1.png",
      titleKey: "premium_membership.family_premium",
      price: "29,495 SAR",
    },
    {
      imgSrc: "/premium_2.png",
      titleKey: "premium_membership.couple_premium",
      price: "29,495 SAR",
    },
    {
      imgSrc: "/premium_3.png",
      titleKey: "premium_membership.single_premium",
      price: "29,495 SAR",
    },
  ];

  return (
    <div className={`${style.container} pb_100 pt_100`} dir={direction}>
      <div className={style.wrapper}>
        <h3 className="section_header" data-aos="fade-up">
          {t("premium_membership.heading")}
        </h3>
        <Swiper
          key={direction}
          dir={direction}
          slidesPerView={1}
          breakpoints={{
            580: { slidesPerView: 1 },
            820: { slidesPerView: 2 },
            1300: { slidesPerView: 3 },
          }}
          spaceBetween={50}
          className={`swiper_container wrapper ${style.swiper_container}`}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          data-aos="fade-up"
        >
          {membershipData.map((membership, index) => (
            <SwiperSlide key={`${index}-${direction}`} className="slider">
              <Link href="#">
                <img src={membership.imgSrc} alt="" className="img_cover" />
                <div className="text_container">
                  <h5>{t(membership.titleKey)}</h5>
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

export default PremiumMembership;

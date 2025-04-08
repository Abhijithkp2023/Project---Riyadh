import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JointMembership = () => {
  const [direction, setDirection] = useState("ltr");
  const { t, i18n } = useTranslation("common");

  useEffect(() => {
    const newDirection = i18n.language === "ar" ? "rtl" : "ltr";
    setDirection(newDirection);
  }, [i18n.language]);

  const membershipData = [
    {
      imgSrc: "/joint_1.png",
      titleKey: "joint_membership.family_premium",
      price: "36,495 SAR",
    },
    {
      imgSrc: "/joint_2.png",
      titleKey: "joint_membership.couple_premium",
      price: "33,495 SAR",
    },
    {
      imgSrc: "/joint_3.png",
      titleKey: "joint_membership.family_premium",
      price: "25,245 SAR",
    },
    {
      imgSrc: "/joint_4.png",
      titleKey: "joint_membership.corporate_premium",
      price: "46,408 SAR",
    },
  ];

  return (
    <div style={{ width: "100vw", background: "#F5EDE6" }}>
      <div className="wrapper pb_100 pt_100" dir={direction}>
        <h3 className="section_header" data-aos="fade-up">
          {t("joint_membership.heading")}
        </h3>

        <Swiper
          key={direction}
          dir={direction}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2 },
            820: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
          spaceBetween={50}
          className="swiper_container wrapper"
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          data-aos="fade-up"
        >
          {membershipData.map((membership, index) => (
            <SwiperSlide
              key={`${index}-${direction}`}
              className="slider"
              style={{ overflow: "hidden", borderRadius: "12px" }}
            >
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

export default JointMembership;
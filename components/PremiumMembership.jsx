import React from "react";

import style from "@/styles/components/premiumMembership.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const PremiumMembership = () => {
  const membershipData = [
    {
      imgSrc: "/premium_1.png",
      title: "Family Premium",
      price: "29,495 SAR",
    },
    {
      imgSrc: "/premium_2.png",
      title: "Couple Premium",
      price: "29,495 SAR",
    },
    {
      imgSrc: "/premium_3.png",
      title: "Single Premium",
      price: "29,495 SAR",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h3 className="section_header" data-aos="fade-up">
          Premium Memberships
        </h3>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            580: { slidesPerView: 1 },
            820: { slidesPerView: 2 },
            1300: { slidesPerView: 3 },
          }}
          spaceBetween={50}
          className="swiper_container wrapper"
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          {membershipData.map((membership, index) => (
            <SwiperSlide key={index} className="slider" data-aos="fade-up">
              <Link href="#">
                <img src={membership.imgSrc} alt="" className="img_cover" />
                <div className="text_container">
                  <h5>{membership.title}</h5>
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

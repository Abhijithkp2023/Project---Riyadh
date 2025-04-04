import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MidWeekMembership = () => {
  const membershipData = [
    {
      imgSrc: "/midweek_1.png",
      title: "Family Midweek",
      price: "36,495 SAR",
    },
    {
      imgSrc: "/midweek_2.png",
      title: "Couple Midweek",
      price: "33,495 SAR",
    },
    {
      imgSrc: "/midweek_3.png",
      title: "Single Midweek",
      price: "46,408 SAR",
    },
    {
      imgSrc: "/midweek_4.png",
      title: "Corporate",
      price: "46,408 SAR",
    },
  ];

  return (
    <div style={{ width: "100vw", background: "#F5EDE6", marginBottom: "2px" }}>
      <div
        style={{ paddingTop: "80px", paddingBottom: "130px" }}
        className="wrapper"
      >
        <h3 className="section_header">Midweek Memberships</h3>

        <Swiper
          slidesPerView={1}
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
            <SwiperSlide key={index} className="slider">
              <img src={membership.imgSrc} alt="" className="img_cover" />
              <div className="text_container">
                <h5>{membership.title}</h5>
                <h6>{membership.price}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MidWeekMembership;

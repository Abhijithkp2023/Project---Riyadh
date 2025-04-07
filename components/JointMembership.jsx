import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const membershipData = [
  {
    imgSrc: "/joint_1.png",
    title: "Joint Family Premium",
    price: "36,495 SAR",
  },
  {
    imgSrc: "/joint_2.png",
    title: "Joint Family Premium",
    price: "36,495 SAR",
  },
  {
    imgSrc: "/joint_3.png",
    title: "Joint Family Premium",
    price: "36,495 SAR",
  },
  {
    imgSrc: "/joint_4.png",
    title: "Joint Family Premium",
    price: "36,495 SAR",
  },
];

const JointMembership = () => {
  return (
    <div style={{ width: "100vw", background: "#F5EDE6" }}>
      <div
        style={{ paddingTop: "80px", paddingBottom: "130px" }}
        className="wrapper"
      >
        <h3 className="section_header" data-aos="fade-up">
          Joint Premium Memberships
        </h3>

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
            <SwiperSlide key={index} className="slider" data-aos="fade-up">
              <Link href="#">
                <img src={membership.imgSrc} alt="" className="img_cover " />
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

export default JointMembership;

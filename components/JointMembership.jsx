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
    title: "Joint Couple Premium",
    price: "33,495 SAR",
  },
  {
    imgSrc: "/joint_3.png",
    title: "Joint Family Premium",
    price: "25,245 SAR",
  },
  {
    imgSrc: "/joint_4.png",
    title: "Corporate Joint Premium",
    price: "46,408 SAR",
  },
];

const JointMembership = () => {
  return (
    <div style={{ width: "100vw", background: "#F5EDE6" }}>
      <div
       
        className="wrapper pb_100 pt_100"
      >
        <h3 className="section_header" data-aos="fade-up">
          Joint Premium Memberships
        </h3>

        <Swiper
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
        >
          {membershipData.map((membership, index) => (
            <SwiperSlide key={index} className="slider" >
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
